import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Registration} from "./registration.model"
import {Account} from "./account.model"

@Entity_()
export class NameTransferred {
    constructor(props?: Partial<NameTransferred>) {
        Object.assign(this, props)
    }

    /**
     * The ID of the event
     */
    @PrimaryColumn_()
    id!: string

    /**
     * The registration associated with the event
     */
    @Index_()
    @ManyToOne_(() => Registration, {nullable: true})
    registration!: Registration

    /**
     * The block number of the event
     */
    @Column_("int4", {nullable: false})
    blockNumber!: number

    /**
     * The transaction ID of the event
     */
    @Column_("bytea", {nullable: false})
    transactionID!: Uint8Array

    /**
     * The new owner of the domain
     */
    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    newOwner!: Account
}
