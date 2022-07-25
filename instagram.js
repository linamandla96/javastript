const username = "linamJay";

const profile = {
    username : "linamJay",
    posts : 24,
    followers: 180,
    picture : "link",
    fullName :"linamandlajojwana",
    bio :"My name is linamandla jojwana from site B",
    link : "zaio.io",
    info(){
return `
       info : ${this.username}
       Posts:    ${this.posts}
       Follwers:  ${this.followers}
       bio:     ${this.bio}
       link:   ${this.link}



`
},

posted(){

    this.posts = this.posts + 1;
    return `${this.username}just posted a photo
    Total number of post updated to ${this.posts}`;
}


}

const post={
    likes:10,
    usernamee:linaJay,
    timestamp:"12:12",
    comments:15
}


const  {usernamee, likes,timestamp, comments} = post
console.log(`${usernamee} just posted a photo with ${likes} likes
it was posetd at ${timestamp}, and currently has ${comments} comments
`)




console.log(profile.posted);
// get data
console.log(profile.followers);

// modify/update
profile.posts = profile.posts + 1;
console.log(profile);

// create new key

profile.email ="linamandla@gmail.com";
profile.phoneNumber = "0631294205";
console.log(profile);

// delete key
delete profile.fullName;
console.log(profile);


// Spread Operator

const primaryColour ={
    red:"red",
    blue :"blue"
};

const secondaryColour ={
       grey:"grey",
       black :"black"
};
const allColours = {

    ...primaryColour,
    ...secondaryColour,

    getColour(colour){

        return this[colour]
    }

}
console.log(allColours.getColour("red"))