import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Resolver} from "./resolver.model"

@Entity_()
export class NameChanged {
    constructor(props?: Partial<NameChanged>) {
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
     * Block number where event occurred
     */
    @Column_("int4", {nullable: false})
    blockNumber!: number

    /**
     * Unique transaction ID where event occurred
     */
    @Column_("bytea", {nullable: false})
    transactionID!: Uint8Array

    /**
     * New ENS name value
     */
    @Column_("text", {nullable: false})
    name!: string
}
