/**
 *  Create a new RoadTRip
 * 
 *  @param {number} userId - the users id
 *  @param {string} roadTripName - the name
 *  @param {Date} startDate - date
 *  @param {Date} endDate - enddate
 * 
 *  @returns { number | Error }  
 */
export function adminRoadTripCreate(userId : number, roadTripName : string, startDate : Date, endDate : Date) : number | Error {
    return 1;
}

/**
 *  Edit Road Trip
 * 
 *  @param {number} roadTripId - roadtrip number
 * 
 *  @returns { Record<string, never> | Error }  
 */
export function adminRoadTripDelete(roadTripId : number) : Record<string, never> | Error {
    return {};
}

/**
 *  Create a new RoadTRip
 * 
 *  @param {number} roadTripId - the users id
 *  @param {string} roadTripName - the name
 * 
 *  @returns { Record<string, never> | Error }  
 */
export function adminRoadTripNameUpdate(roadTripId : number, roadTripName : string) : Record<string, never> | Error {
    return {};
}

/**
 *  Create a new RoadTRip
 * 
 *  @param {number} roadTripId - the users id
 *  @param {Date} startDate - the start date
 * 
 *  @returns { Record<string, never> | Error }  
 */
export function adminRoadTripStartUpdate(roadTripId : number, startDate : Date) : Record<string, never> | Error {
    return {};
}

/**
 *  Create a new RoadTrip
 * 
 *  @param {number} roadTripId - the users id
 *  @param {Date} endDate - the end date
 * 
 *  @returns { Record<string, never> | Error }  
 */
export function adminRoadTripEndUpdate(roadTripId : number, endDate : Date) : Record<string, never> | Error {
    return {};
}