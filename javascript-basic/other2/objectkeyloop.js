/**
 *  key found with loop
 */
const profile = {
    name: "Rahim",
    age: 28,
    city: "Dhaka"
};

/**
 * RULL 1 With for in
 */
for (const key in profile) {
    const value = profile[key];
    console.log(key, value)
}

/**
 * RULL 2 With for of
 */
const profileKey = Object.keys(profile)
for (const key of profileKey) {
    const value = profile[key]
    // console.log(key, ":", value)
}
