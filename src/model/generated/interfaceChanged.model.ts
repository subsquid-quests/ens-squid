import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Resolver} from "./resolver.model"

@Entity_()
export class InterfaceChanged {
    constructor(props?: Partial<InterfaceChanged>) {
        Object.assign(this, props)
    }

    /**
     * Concatenation of block number and log ID
     */
    @PrimaryColumn_()
    id!: string

    /**
     * Used to derive relationships to Resolvers
     */
    @Index_()
    @ManyToOne_(() => Resolver, {nullable: true})
    resolver!: Resolver

    /**
     * The block number in which the event occurred
     */
    @Column_("int4", {nullable: false})
    blockNumber!: number

    /**
     * The transaction ID for the transaction in which the event occurred
     */
    @Column_("bytea", {nullable: false})
    transactionID!: Uint8Array

    /**
     * The ID of the EIP-1820 interface that was changed
     */
    @Column_("bytea", {nullable: false})
    interfaceID!: Uint8Array

    /**
     * The address of the contract that implements the interface
     */
    @Column_("bytea", {nullable: false})
    implementer!: Uint8Array
}
