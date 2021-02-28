import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserFeatureEntity } from '../userfeature/userfeature.entity';

@Entity({ name: 'features' })
export class FeatureEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 20, unique: true })
    name: string;

    @Column({ type: "varchar", length: 200 })
    description: string;

    @OneToMany(type => UserFeatureEntity, userFeature => userFeature.feature)
    userFeatures: UserFeatureEntity[]
}