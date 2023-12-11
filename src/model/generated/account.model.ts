import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {Domain} from "./domain.model"
import {WrappedDomain} from "./wrappedDomain.model"
import {Registration} from "./registration.model"

@Entity_()
export class Account {
    constructor(props?: Partial<Account>) {
        Object.assign(this, props)
    }

    /**
     * The unique identifier for the account
     */
    @PrimaryColumn_()
    id!: string

    /**
     * The domains owned by the account
     */
    @OneToMany_(() => Domain, e => e.owner)
    domains!: Domain[]

    /**
     * The WrappedDomains owned by the account
     */
    @OneToMany_(() => WrappedDomain, e => e.owner)
    wrappedDomains!: WrappedDomain[]

    /**
     * The Registrations made by the account
     */
    @OneToMany_(() => Registration, e => e.registrant)
    registrations!: Registration[]
}
