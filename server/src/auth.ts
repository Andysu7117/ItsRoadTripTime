/**
 * Register a user with an email, password and name
 * 
 * @param {string} email - user's email
 * @param {string} password - user's password
 * @param {string} nameFirst - user's first name
 * @param {string} nameLast - user's last name
 * 
 * @returns {number}
 */

export function adminAuthRegister(email : string, password : string, nameFirst : string, nameLast : string) : number {
    return 1
}

/**
 * 
 * Given a registered user's email and password
 * 
 * @param {string} email - user's email
 * @param {string} password - user's password
 * 
 * @returns {number}
 * 
 */

export function adminAuthLogin(email : string, password : string) : number{
    return 1
}