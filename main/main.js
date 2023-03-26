let array=[4,6,7,8,10];
function numSmall(array,num)
{
	for(i=0;i<array.length;i++);
{
	      
	for(j=i+1;j<array.length;j++)
	{
		if(array[i]>array[j])
		{
		
				temp=array[j];
				array[j]=array[i];
				array[i]=temp;
		}
	}
}

console.log(array);
let small=array[num-1];
return small;
}

console.log("2rd smallest number is"+numSmall(array,2));
console.log("smallest number is"+numSmall(array,1));
document.write("1 st smallest number is" + numSmall(array,1)+ "<br>"+ "2nd smallest number is"+numSmall(array,2)); 