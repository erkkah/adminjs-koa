import { CurrentAdmin } from 'adminjs'

/**
 * @memberof module:@adminjs/koa
 * @alias KoaAuthenticateFunction
 *
 * @description
 * An async authentication function, returning {@link CurrentAdmin}
 *
 * @returns {Promise<CurrentAdmin>}
 */
export type KoaAuthenticateFunction = (
  /**
   * email address passed in a form
   */
  email: string,
  /**
   * Password passed in a form
   */
  password: string
) => Promise<CurrentAdmin | null>

/**
 * @memberof module:@adminjs/koa
 * @alias KoaAuthOptions
 *
 * @description
 * Authentication options
 */
export type KoaAuthOptions = {
  /**
   * Function returning {@link CurrentAdmin}
   */
  authenticate: KoaAuthenticateFunction;
}
