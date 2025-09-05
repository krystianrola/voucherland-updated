import { Sequelize } from 'sequelize-typescript';
import { User, UserCreationAttr } from 'src/users/entities/user.entity';

export class UserSeeder {
  static async seed(sequelize: Sequelize) {
    console.info('[Users Seeder] Seeding users...');

    const users: UserCreationAttr[] = [
      {
        firstname: 'admin',
        lastname: 'user',
        email: 'admin.user@voucherland.com',
        password: 'admin123',
        is_admin: true,
      },
      {
        firstname: 'regular',
        lastname: 'user',
        email: 'regular.user@voucherland.com',
        password: 'user123',
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
