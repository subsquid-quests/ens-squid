import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Registration} from "./registration.model"
import {Account} from "./account.model"

@Entity_()
export class NameRegistered {
    constructor(props?: Partial<NameRegistered>) {
        Object.assign(this, props)
    }

    /**
     * The unique identifier of the NameRegistered event
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
     * The transaction ID associated with the event
     */
    @Column_("bytea", {nullable: false})
    transactionID!: Uint8Array

    /**
     * The account that registered the name
     */
    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    registrant!: Account

    /**
     * The expiry date of the registration
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    expiryDate!: bigint
}
