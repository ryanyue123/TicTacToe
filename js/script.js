$(document).ready(function() {
	var x = "x";
	var o = "o";
	var turns = 0;

	var spot1 = $('#spot1');
	var spot2 = $('#spot2');
	var spot3 = $('#spot3');
	var spot4 = $('#spot4');
	var spot5 = $('#spot5');
	var spot6 = $('#spot6');
	var spot7 = $('#spot7');
	var spot8 = $('#spot8');
	var spot9 = $('#spot9');

	var won = false;
	var array = [[spot1, spot2, spot3],[spot4, spot5, spot6], [spot7, spot8, spot9]];

	$('#board li').on('click', function(){
		if(checkWin(array, "o"))
		{
			alert("Winner: O");
			reset();
		}
		else if (checkWin(array, "x"))
		{
			alert("Winner: X");
			reset();
		}
		else if (turns == 9)
		{
			alert("Tie Game");
			
		}
		else if ($(this).hasClass('disable'))
		{
			alert("This spot is already filled");
		}
		else if (turns%2 == 0)
		{
			turns += 1;
			$(this).text("o");
			$(this).addClass('disable o');

			if(checkWin(array, "o"))
			{
				alert("Winner: O");
				reset();
			}
		}
		else
		{
			turns += 1;
			$(this).text("x");
			$(this).addClass('disable x');

			if (checkWin(array, "x"))
			{
				alert("Winner: X");
				reset();
			}
		}

	})

	function reset()
	{
		turns = 0;
		$("#board li").text("+");
		$("#board li").removeClass('disable');
		$("#board li").removeClass('o');
		$("#board li").removeClass('x');
	}

	function checkWin(myarray, str)
	{
		for (var i = 0; i < 3; i++)
		{
			var first = myarray[i][0].hasClass(str);
			var second = myarray[i][1].hasClass(str);
			var third = myarray[i][2].hasClass(str);

			if (first && second && third)
			{
				alert("horizontal win");
				return true;
			}
			
			first = myarray[0][i].hasClass(str);
			second = myarray[1][i].hasClass(str);
			third = myarray[2][i].hasClass(str);

			if (first && second && third)
			{
				alert("vertical win");
				return true;
			}
		}
		if(myarray[0][0].hasClass(str) && myarray[1][1].hasClass(str) && myarray[2][2].hasClass(str))
		{
			alert("diagonal win");
			return true;
		}
		if(myarray[0][2].hasClass(str) && myarray[1][1].hasClass(str) && myarray[2][0].hasClass(str))
		{
			alert("diagonal win");
			return true;
		}
		return false;
	}

	$("#reset").on("click", function()
	{
		turns = 0;
		$("#board li").text("+");
		$("#board li").removeClass('disable');
		$("#board li").removeClass('o');
		$("#board li").removeClass('x');
	})
});