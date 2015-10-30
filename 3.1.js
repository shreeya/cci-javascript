//Describe how you could use a single array to implement three stacks

//there would be 3 pointers, that represented the top of each stack (topofstack1, topofstack2, topofstack3)

//popping
//if stack i was popped, you would return the value at index (topofstacki), 
//splice the array at that index
//if topofstacki - 1 is = any of the other topofstacks or = -1, do nothing
//otherwise, decrement value of topofstacki

//pushing
//if stack i was pushed to, you would
//insert that value at index topofstacki + 1, using splice
//increment value of topofstacki

