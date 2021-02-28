import { Entity, ManyToOne, JoinColumn, Column } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { FeatureEntity } from '../feature/feature.entity';

@Entity({ name: 'userfeature' })
export class UserFeatureEntity {
    @ManyToOne(type => UserEntity, user => user.userFeatures, { primary: true })
    @JoinColumn({ referencedColumnName: 'email' })
    user: UserEntity;

    @ManyToOne(type => FeatureEntity, feature => feature.userFeatures, { primary: true })
    @JoinColumn({ referencedColumnName: 'name' })
    feature: FeatureEntity

    /*Based on requirement statement, it's not require to add enable property in junction table
      but added if want to enable/disable certain feature for a user*/
    @Column()
    enable: boolean
}