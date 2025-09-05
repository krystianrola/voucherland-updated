import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Sequelize } from 'sequelize-typescript';
import { UserSeeder } from './database/seeders/user.seeder';

const PORT = process.env.PORT ?? 3000;

async function waitForDB(
  sequelize: Sequelize,
  retries: number = 5,
  delay: number = 3000,
) {
  for (let idx = 0; idx < retries; idx++) {
    try {
      await sequelize.authenticate();

      console.log('[Sequelize] Database connection successful.');
      return;
    } catch (error) {
      console.error(`Database not ready, retrying in ${delay / 1000}s...`);

      await new Promise((r) => setTimeout(r, delay));
    }

    throw new Error(
      '[Sequelize] Could not connect to the database after multiple retries.',
    );
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const sequelize = app.get(Sequelize);

  try {
    await waitForDB(sequelize);
    await UserSeeder.seed(sequelize);

    console.log('[Sequelize] Seeding finished.');
  } catch (error) {
    console.error('[Sequelize] Seeding failed:', error);

    await sequelize.close();
    await app.close();
    return;
  }

  await app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

bootstrap().catch((error) => {
  console.error('Bootstrap failed:', error);
  process.exit(1);
});
