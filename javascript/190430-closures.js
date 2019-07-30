/**
* moyarich (moyarich.com | codingstorytime.com)
* 
* Coding Story Time - A JavaScript function can return a function
* 
* My dog ate half of my sandwiches
*/

function house(sandwiches){
	function dogHouse(){
		let dogEat = sandwiches / 2;
		return dogEat;
	}
	return dogHouse;
}

/*
So today, I had plans to spend the rest of the day being lazy. My friend John is going to clean my dog's house for me, so I am super happy.
My dog is super spoiled. She has her own house in my basement.

Well, right before I gave John the dog house, I made myself 4 sandwiches. Two for lunch and two for dinner, after that I went to sleep.
*/

var dogHouse = house(4);

/*
I woke up two hours later to check on my dog's house because I wanted to see how clean it was, and you won't believe what I saw!
*/

var checkDogHouse = dogHouse();

/*
I saw my dog, in her house, eating half the sandwiches I had sitting on my kitchen table.
*/

console.log(checkDogHouse); //expected output 2

/*
I completely forgot that since the dog's house was inside of my house, the dog can do whatever she wants with my things.

This time she decided to eat half of my sandwiches, I can't even imagine what she would do next. 

Right now, I am hungry and a little mad at myself. So, my decision is final, I have made up my mind. 
I have plans to move the dog's house to the backyard this summer.
*/

---------Recap --------
dogHouse is a child of the house function so it will have access to the sandwich.

JavaScript allows functions to return functions, a very powerful technique

https://medium.com/@codingstorytime/coding-story-time-the-javascript-function-can-return-a-function-6d53791088c1

#JavaScript #codingstorytime #javascriptexample #programming, #geek

#WebDevelopment #ComputerScience #Tech #Programming
