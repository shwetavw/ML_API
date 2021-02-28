import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserFeatureEntity } from '../userfeature/userfeature.entity';

@Entity({ name: 'users' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 50, unique: true })
    email: string;

    @Column({ type: "varchar", length: 30 })
    username: string;

    @OneToMany(type => UserFeatureEntity, userFeature => userFeature.user)
    userFeatures: UserFeatureEntity[]
}