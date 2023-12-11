import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Domain} from "./domain.model"
import {Account} from "./account.model"

@Entity_()
export class WrappedTransfer {
    constructor(props?: Partial<WrappedTransfer>) {
        Object.assign(this, props)
    }

    /**
     * The unique identifier of the event
     */
    @PrimaryColumn_()
    id!: string

    /**
     * The domain name associated with the event
     */
    @Index_()
    @ManyToOne_(() => Domain, {nullable: true})
    domain!: Domain

    /**
     * The block number at which the event occurred
     */
    @Column_("int4", {nullable: false})
    blockNumber!: number

    /**
     * The transaction hash of the transaction that triggered the event
     */
    @Column_("bytea", {nullable: false})
    transactionID!: Uint8Array

    /**
     * The account that owns the wrapped domain after the transfer
     */
    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    owner!: Account
}
