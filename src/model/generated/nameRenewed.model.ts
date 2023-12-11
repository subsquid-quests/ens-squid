import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Registration} from "./registration.model"

@Entity_()
export class NameRenewed {
    constructor(props?: Partial<NameRenewed>) {
        Object.assign(this, props)
    }

    /**
     * The unique identifier of the NameRenewed event
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
     * The new expiry date of the registration
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    expiryDate!: bigint
}
