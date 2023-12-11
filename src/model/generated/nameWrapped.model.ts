import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Domain} from "./domain.model"
import {Account} from "./account.model"

@Entity_()
export class NameWrapped {
    constructor(props?: Partial<NameWrapped>) {
        Object.assign(this, props)
    }

    /**
     * The unique identifier of the wrapped domain
     */
    @PrimaryColumn_()
    id!: string

    /**
     * The domain name associated with the wrapped domain
     */
    @Index_()
    @ManyToOne_(() => Domain, {nullable: true})
    domain!: Domain

    /**
     * The block number at which the wrapped domain was wrapped
     */
    @Column_("int4", {nullable: false})
    blockNumber!: number

    /**
     * The transaction hash of the transaction that wrapped the domain
     */
    @Column_("bytea", {nullable: false})
    transactionID!: Uint8Array

    /**
     * The human-readable name of the wrapped domain
     */
    @Index_()
    @Column_("text", {nullable: true})
    name!: string | undefined | null

    /**
     * The number of fuses associated with the wrapped domain
     */
    @Index_()
    @Column_("int4", {nullable: false})
    fuses!: number

    /**
     * The account that owns the wrapped domain
     */
    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    owner!: Account

    /**
     * The expiry date of the wrapped domain registration
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    expiryDate!: bigint
}
