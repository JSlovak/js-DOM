/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/

document.getElementById("name1").innerHTML = "Tay-tay";



/*2. Replace the n/a with the following: 

Project Manager*/

var newPosition2 = document.getElementById("position2");
newPosition2.innerHTML = "Project Manager";

/*3. Replace the n/a with the following:

Concatenation*/

var newAlias3 = document.getElementById("alias3");
newAlias3.innerHTML = "Con Cat e Nation";

/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/

var newProfile = document.getElementsByClassName("profile");


newProfile[0].innerHTML = "Lorizzle check it out mah nizzle sit amizzle, consectetuer adipiscing gizzle. Crackalackin yippiyo velit, shizzle my nizzle crocodizzle volutpizzle, dizzle boom shackalack, bow wow wow vizzle, da bomb. Pellentesque eget tortor. Sizzle erizzle. Fusce pizzle dolizzle break yo neck, yall turpizzle tempizzle ghetto.";


/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/

var newProfile = document.getElementsByClassName("profile");


newProfile[2].innerHTML = "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.";


/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/

var newChuck = document.createElement("div");
newChuck.id = "name7"; 
console.log(newChuck);
newChuck.innerHTML = "Chuck Norris";
nameBox.appendChild(newChuck); 



/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/


var newGrimmace = document.createElement("div");
newGrimmace.id = "alias8";
console.log (newGrimmace);
newGrimmace.innerHTML = "The Purple Monstor";
aliasBox.appendChild(newGrimmace);


//Final Boss
/*8. Create your own profile.*/

// Change Image // 

var newImage = document.createElement("img");

newImage.src = "https://andrewperez15.files.wordpress.com/2013/04/astronaut.jpg";

var newName = document.createElement("div");
var newPosition = document.createElement("div");
var newAlias = document.createElement("div");
var newBio = document.createElement("div");

newName.className= "name";
newPosition.className= "position";
newAlias.className= "alias";
newBio.className= "profile";

newName.innerHTML= "Jasmine Slovak";
newPosition.innerHTML= "JS Full-stack Developer";
newAlias.innerHTML= "Aspiring Google Ninja";
newBio.innerHTML= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste minus, molestiae cum odio vitae eos deserunt minima totam suscipit aliquam aspernatur ea eaque nihil eligendi ut quod nam. Ducimus, hic?";

var newProfile = document.getElementsByClassName("block3 col-sm-4")[2];

newProfile.appendChild(newName);
newProfile.appendChild(newPosition);
newProfile.appendChild(newAlias);
newProfile.appendChild(newBio);

