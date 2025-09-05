import { Sequelize } from 'sequelize-typescript';
import { User, UserCreationAttr } from 'src/users/entities/user.entity';

export class UserSeeder {
  static async seed(sequelize: Sequelize) {
    console.info('[Users Seeder] Seeding users...');

    const users: UserCreationAttr[] = [
      {
        firstname: 'test',
        lastname: 'user',
        email: 'test.user@voucherland.com',
        password: 'test123',
        is_admin: true,
      },
      {
        firstname: 'test2',
        lastname: 'user',
        email: 'test2.user@voucherland.com',
        password: 'test123',
        is_admin: false,
      },
    ];

    await sequelize.sync();

    try {
      await User.bulkCreate(users, { ignoreDuplicates: true });
    } catch (error) {
      console.error('[Users Seeder] Error seeding users:', error);
    }

    console.info('[Users Seeder] Users seeded!');
  }
}
