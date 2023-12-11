import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Resolver} from "./resolver.model"

@Entity_()
export class MulticoinAddrChanged {
    constructor(props?: Partial<MulticoinAddrChanged>) {
        Object.assign(this, props)
    }

    /**
     * Unique identifier for the event
     */
    @PrimaryColumn_()
    id!: string

    /**
     * Resolver associated with this event
     */
    @Index_()
    @ManyToOne_(() => Resolver, {nullable: true})
    resolver!: Resolver

    /**
     * Block number in which this event was emitted
     */
    @Column_("int4", {nullable: false})
    blockNumber!: number

    /**
     * Transaction ID in which this event was emitted
     */
    @Column_("bytea", {nullable: false})
    transactionID!: Uint8Array

    /**
     * The coin type of the changed address
     */
    @Column_("text", {nullable: false})
    coinType!: string

    /**
     * The new address value for the given coin type
     */
    @Column_("bytea", {nullable: false})
    addr!: Uint8Array
}
