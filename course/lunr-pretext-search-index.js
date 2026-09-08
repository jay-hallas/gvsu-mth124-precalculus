var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus        Course Information  This is the syllabus for course name (MATH xxx, section xxx) for [term] 20xx. It is a [n] credit course.    Instructor  Prof. Lastname, Office Location, prof.lastname@example.edu .    Student Hours  TBD    Class meets  course times and location.    Course Description  course description from catalog    Prerequisite  list of prerequisites    Textbook and course materials   textbook name by textbook author.       Course Overview        Assessments and Grades     "
},
{
  "id": "sec-course-info-2",
  "level": "2",
  "url": "syllabus.html#sec-course-info-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "course name (MATH xxx, section xxx) "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.     Monday 8\/22      Wednesday 8\/24      Friday 8\/26     "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2   Monday      Wednesday      Friday     "
},
{
  "id": "activity-function-fundamentals",
  "level": "1",
  "url": "activity-function-fundamentals.html",
  "type": "Worksheet",
  "number": "",
  "title": "Activity: Function Fundamentals",
  "body": " Activity: Function Fundamentals     Function Definition and Tables   A function is a rule that assigns to each input exactly one output. The set of all possible inputs is called the domain , and the set of all corresponding outputs is called the range . Two different inputs are allowed to share an output; a single input is never allowed to have two outputs. When working in context, identifying the units of the input and output is just as important as the arithmetic.     Determine whether the following table can represent a function. Make a brief note explaining why or why not.                      Yes, this table can represent a function. We check the inputs (the -values) to ensure that each one is assigned to exactly one output. The input maps to , and the input also maps to . It is perfectly valid for two different inputs to share the same output. Because no single input is assigned multiple different outputs, the defining rule of a function is satisfied.      Determine whether the following table can represent a function. Make a brief note explaining why or why not.                      No, this table cannot represent a function. If we examine the inputs, we see that appears twice in the domain row. In the first instance, the input is assigned an output of . In the second instance, the same input is assigned an output of . Because a single input is mapping to two distinct outputs, this relationship violates the strict definition of a function.      Determine whether the following table can represent a function. Make a brief note explaining why or why not.                      Yes, this table can represent a function. Every input in the top row has exactly one output associated with it. The fact that every input produces the identical output of means this represents a constant function. The definition of a function only prohibits one input from pointing to multiple outputs; it places no restriction on how many inputs can point to the same output.      Evaluating from a Table   Consider the function defined by the following table:                        Determine .   The notation tells us to find the output when the input is . Locating in the row, we read the corresponding value directly below it in the row. Therefore, .     Find all values such that .   The equation provides the output and asks us to work backwards to find the input(s). Scanning the row for the value , we see it appears twice. Reading the corresponding inputs in the top row above these values yields and .      Find all values such that . Is this the same question as finding ? Explain the difference in your own words.    Scanning the row for the output , we find it in the final column. Reading up to the input row, the corresponding input is .  This is an entirely different operation from finding . The expression puts in the input slot, meaning we start at the top of the table and read downward. The equation puts in the output slot, meaning we start at the bottom of the table and read upward to find all matching inputs.         Evaluating Symbolic Functions   To evaluate a function given by a formula, replace every occurrence of the input variable with the value you were given, wrapping negative inputs in parentheses. Then simplify one operation at a time. If the formula contains a fraction or a square root, check whether the input is even allowed before you simplify.     Let . Evaluate and show your step-by-step simplification.    First, substitute for every instance of in the formula, making sure to use parentheses around the negative value: Next, perform the multiplications in the first term and in the denominator: Simplify the denominator, then reduce the fraction: Finally, combine the terms: .      Quadratic Function Evaluation   Let .    Determine .   Substitute for and follow the order of operations, ensuring exponents are applied before multiplication:      Determine .   Substitute for , being particularly careful with the signs when squaring a negative number and when multiplying two negative values:       Rational Functions and Domain Restrictions   Let .    Determine , writing your answer as a simplified fraction.   Substitute into both the numerator and denominator:      Are there any input values that must be excluded from the domain of ? If so, list them and explain what goes wrong there.   Yes. For a rational function, any input that makes the denominator equal to zero must be excluded from the domain, because division by zero is mathematically undefined. To find these restricted values, set the denominator equal to zero and solve for : This gives the solutions and . Both of these inputs will cause division by zero, so they must be entirely excluded from the domain of .      Radical Function Evaluation    Let . Determine and .    For , substitute for : For , substitute for :       Expression Substitution    Let . Determine and simplify your answer completely. (Substitute the entire expression everywhere you see an .)    To evaluate , treat the entire quantity as a single input block and place it into every slot where an appears in the original formula: Next, expand the squared binomial carefully. A common pitfall is to write , but the correct expansion requires distributing: . Also, be sure to distribute the through the second term: Finally, combine the like terms ( and , as well as and ) to fully simplify:          Evaluating from a Graph   Consider a function defined by the piecewise linear graph below.    A piecewise linear graph made of three connected segments. It begins at (-4,-2), rises to a peak at (-2,2), drops back down to a valley at (2,-2), and rises again to end at (4,2).       Determine .   Locate the input on the horizontal axis and trace vertically to the graph. The graph passes through the point on the falling segment. The output is the -coordinate, so .     Find all values such that .   We are looking for all points where the graph is at a height of zero (meaning it intersects the -axis). Examining the grid, the graph crosses the horizontal axis at three distinct locations: midway up the first rising segment at , precisely at the origin , and midway up the final rising segment at . Therefore, the inputs are , , and .     Find all values such that .   We must locate all points on the graph that sit at a height of . Scanning horizontally across the grid at that level, the graph reaches a height of exactly twice: at the peak corner point , and at the final endpoint on the far right at . Therefore, the inputs are and .      Graphical Function Identification    Two of the graphs below represent functions and two do not. Assume the horizontal axis corresponds to inputs ( ) and the vertical axis corresponds to outputs ( ). Identify the two that are not functions, and explain how you decided.    Graph A    A cubic function curve running smoothly from bottom left to top right, passing through the origin.       Graph B    A sideways opening parabola facing to the right, passing through the x-axis at x=-2.         Graph C    A V-shaped absolute value curve opening upwards with its vertex at (0,-1).       Graph D    A circle centered at the origin with a radius of 2.          Graph B and Graph D do not represent functions. We can determine this by applying the Vertical Line Test. In a function graph, every vertical line represents a specific input , and if a line crosses the graph more than once, it means that single input is yielding multiple different outputs.  In Graph B (the sideways parabola), a vertical line drawn at will intersect the graph at two distinct points: and . Because the input has two outputs, it fails to be a function.  In Graph D (the circle), a vertical line drawn exactly on the -axis (where ) will hit the graph at both and . Again, a single input yields multiple outputs, so it is not a function.  Graphs A and C successfully pass the vertical line test. (Note for Graph C: sharp corners are entirely allowed in functions, provided there is no vertical overlap).         Functions in Context: Laptop Battery   A statement like carries three pieces of information: the input value, the output value, and the units attached to each. A good interpretation is a full sentence that mentions all three and never uses the letters , , or .  A laptop is unplugged from the wall and begins running on battery power. The remaining battery charge, (measured as a percentage), is a function of the time (measured in hours) since the laptop was unplugged. Let .    Identify the input and output variables, making sure to state their specific units.   The input variable is time , and its units are hours. The output variable is the remaining battery charge , and its units are percent.     Interpret the meaning of the statement in the context of this scenario.   Two and a half hours after the laptop was unplugged from the wall, the remaining battery charge has decreased to 40 percent.     If we were to calculate the change in battery charge divided by the change in time, what would the units of this new value be? Briefly explain what this rate represents in this context.   The units of this rate would be percent per hour (change in output units divided by change in input units). Conceptually, this rate represents the average speed at which the laptop is consuming battery power over a given time interval. Because the battery is draining, we would expect this calculated rate of change to be a negative number.      Functions in Context: Coffee Temperature   A cup of coffee is poured and left sitting on a desk. Its temperature (measured in degrees Fahrenheit) is a function of the number of minutes since it was poured. Let .    Identify the input and output variables, making sure to state their specific units.   The input variable is time , and its units are minutes. The output variable is the temperature of the coffee , and its units are degrees Fahrenheit.     Interpret the meaning of the statement in the context of this scenario.   Ten minutes after the cup of coffee was poured, it has cooled to a temperature of exactly 145 degrees Fahrenheit.      Explain what the equation is asking, and describe what a solution to that equation would tell you about the coffee. How is this different from the question in part (b)?    This equation is asking us to find the specific time (or times) at which the coffee's temperature reaches exactly 100 degrees Fahrenheit. If we were to solve the equation, the resulting number would tell us how many minutes the coffee had been sitting on the desk before it hit that temperature threshold.  The difference between this and part (b) is the direction of the evaluation. In part (b), the input time ( minutes) was provided to us, and we evaluated the function to report the output temperature. Here, the output temperature ( degrees) is the known value, and we are working backwards to solve for the unknown input time.      "
},
{
  "id": "fn-tables",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-tables",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Function Definition and Tables.",
  "body": " Function Definition and Tables   A function is a rule that assigns to each input exactly one output. The set of all possible inputs is called the domain , and the set of all corresponding outputs is called the range . Two different inputs are allowed to share an output; a single input is never allowed to have two outputs. When working in context, identifying the units of the input and output is just as important as the arithmetic.     Determine whether the following table can represent a function. Make a brief note explaining why or why not.                      Yes, this table can represent a function. We check the inputs (the -values) to ensure that each one is assigned to exactly one output. The input maps to , and the input also maps to . It is perfectly valid for two different inputs to share the same output. Because no single input is assigned multiple different outputs, the defining rule of a function is satisfied.      Determine whether the following table can represent a function. Make a brief note explaining why or why not.                      No, this table cannot represent a function. If we examine the inputs, we see that appears twice in the domain row. In the first instance, the input is assigned an output of . In the second instance, the same input is assigned an output of . Because a single input is mapping to two distinct outputs, this relationship violates the strict definition of a function.      Determine whether the following table can represent a function. Make a brief note explaining why or why not.                      Yes, this table can represent a function. Every input in the top row has exactly one output associated with it. The fact that every input produces the identical output of means this represents a constant function. The definition of a function only prohibits one input from pointing to multiple outputs; it places no restriction on how many inputs can point to the same output.    "
},
{
  "id": "fn-table-evaluation",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-table-evaluation",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Evaluating from a Table.",
  "body": " Evaluating from a Table   Consider the function defined by the following table:                        Determine .   The notation tells us to find the output when the input is . Locating in the row, we read the corresponding value directly below it in the row. Therefore, .     Find all values such that .   The equation provides the output and asks us to work backwards to find the input(s). Scanning the row for the value , we see it appears twice. Reading the corresponding inputs in the top row above these values yields and .      Find all values such that . Is this the same question as finding ? Explain the difference in your own words.    Scanning the row for the output , we find it in the final column. Reading up to the input row, the corresponding input is .  This is an entirely different operation from finding . The expression puts in the input slot, meaning we start at the top of the table and read downward. The equation puts in the output slot, meaning we start at the bottom of the table and read upward to find all matching inputs.    "
},
{
  "id": "fn-symbolic-evaluation",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-symbolic-evaluation",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Evaluating Symbolic Functions.",
  "body": " Evaluating Symbolic Functions   To evaluate a function given by a formula, replace every occurrence of the input variable with the value you were given, wrapping negative inputs in parentheses. Then simplify one operation at a time. If the formula contains a fraction or a square root, check whether the input is even allowed before you simplify.     Let . Evaluate and show your step-by-step simplification.    First, substitute for every instance of in the formula, making sure to use parentheses around the negative value: Next, perform the multiplications in the first term and in the denominator: Simplify the denominator, then reduce the fraction: Finally, combine the terms: .    "
},
{
  "id": "fn-quadratic-evaluation",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-quadratic-evaluation",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Quadratic Function Evaluation.",
  "body": " Quadratic Function Evaluation   Let .    Determine .   Substitute for and follow the order of operations, ensuring exponents are applied before multiplication:      Determine .   Substitute for , being particularly careful with the signs when squaring a negative number and when multiplying two negative values:     "
},
{
  "id": "fn-rational-domain",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-rational-domain",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Rational Functions and Domain Restrictions.",
  "body": " Rational Functions and Domain Restrictions   Let .    Determine , writing your answer as a simplified fraction.   Substitute into both the numerator and denominator:      Are there any input values that must be excluded from the domain of ? If so, list them and explain what goes wrong there.   Yes. For a rational function, any input that makes the denominator equal to zero must be excluded from the domain, because division by zero is mathematically undefined. To find these restricted values, set the denominator equal to zero and solve for : This gives the solutions and . Both of these inputs will cause division by zero, so they must be entirely excluded from the domain of .    "
},
{
  "id": "fn-radical-evaluation",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-radical-evaluation",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Radical Function Evaluation.",
  "body": " Radical Function Evaluation    Let . Determine and .    For , substitute for : For , substitute for :     "
},
{
  "id": "fn-expression-substitution",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-expression-substitution",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "Expression Substitution.",
  "body": " Expression Substitution    Let . Determine and simplify your answer completely. (Substitute the entire expression everywhere you see an .)    To evaluate , treat the entire quantity as a single input block and place it into every slot where an appears in the original formula: Next, expand the squared binomial carefully. A common pitfall is to write , but the correct expansion requires distributing: . Also, be sure to distribute the through the second term: Finally, combine the like terms ( and , as well as and ) to fully simplify:     "
},
{
  "id": "fn-graph-evaluation",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-graph-evaluation",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "Evaluating from a Graph.",
  "body": " Evaluating from a Graph   Consider a function defined by the piecewise linear graph below.    A piecewise linear graph made of three connected segments. It begins at (-4,-2), rises to a peak at (-2,2), drops back down to a valley at (2,-2), and rises again to end at (4,2).       Determine .   Locate the input on the horizontal axis and trace vertically to the graph. The graph passes through the point on the falling segment. The output is the -coordinate, so .     Find all values such that .   We are looking for all points where the graph is at a height of zero (meaning it intersects the -axis). Examining the grid, the graph crosses the horizontal axis at three distinct locations: midway up the first rising segment at , precisely at the origin , and midway up the final rising segment at . Therefore, the inputs are , , and .     Find all values such that .   We must locate all points on the graph that sit at a height of . Scanning horizontally across the grid at that level, the graph reaches a height of exactly twice: at the peak corner point , and at the final endpoint on the far right at . Therefore, the inputs are and .    "
},
{
  "id": "fn-vertical-line-test",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-vertical-line-test",
  "type": "Worksheet Exercise",
  "number": "9",
  "title": "Graphical Function Identification.",
  "body": " Graphical Function Identification    Two of the graphs below represent functions and two do not. Assume the horizontal axis corresponds to inputs ( ) and the vertical axis corresponds to outputs ( ). Identify the two that are not functions, and explain how you decided.    Graph A    A cubic function curve running smoothly from bottom left to top right, passing through the origin.       Graph B    A sideways opening parabola facing to the right, passing through the x-axis at x=-2.         Graph C    A V-shaped absolute value curve opening upwards with its vertex at (0,-1).       Graph D    A circle centered at the origin with a radius of 2.          Graph B and Graph D do not represent functions. We can determine this by applying the Vertical Line Test. In a function graph, every vertical line represents a specific input , and if a line crosses the graph more than once, it means that single input is yielding multiple different outputs.  In Graph B (the sideways parabola), a vertical line drawn at will intersect the graph at two distinct points: and . Because the input has two outputs, it fails to be a function.  In Graph D (the circle), a vertical line drawn exactly on the -axis (where ) will hit the graph at both and . Again, a single input yields multiple outputs, so it is not a function.  Graphs A and C successfully pass the vertical line test. (Note for Graph C: sharp corners are entirely allowed in functions, provided there is no vertical overlap).    "
},
{
  "id": "fn-context-battery",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-context-battery",
  "type": "Worksheet Exercise",
  "number": "10",
  "title": "Functions in Context: Laptop Battery.",
  "body": " Functions in Context: Laptop Battery   A statement like carries three pieces of information: the input value, the output value, and the units attached to each. A good interpretation is a full sentence that mentions all three and never uses the letters , , or .  A laptop is unplugged from the wall and begins running on battery power. The remaining battery charge, (measured as a percentage), is a function of the time (measured in hours) since the laptop was unplugged. Let .    Identify the input and output variables, making sure to state their specific units.   The input variable is time , and its units are hours. The output variable is the remaining battery charge , and its units are percent.     Interpret the meaning of the statement in the context of this scenario.   Two and a half hours after the laptop was unplugged from the wall, the remaining battery charge has decreased to 40 percent.     If we were to calculate the change in battery charge divided by the change in time, what would the units of this new value be? Briefly explain what this rate represents in this context.   The units of this rate would be percent per hour (change in output units divided by change in input units). Conceptually, this rate represents the average speed at which the laptop is consuming battery power over a given time interval. Because the battery is draining, we would expect this calculated rate of change to be a negative number.    "
},
{
  "id": "fn-context-coffee",
  "level": "2",
  "url": "activity-function-fundamentals.html#fn-context-coffee",
  "type": "Worksheet Exercise",
  "number": "11",
  "title": "Functions in Context: Coffee Temperature.",
  "body": " Functions in Context: Coffee Temperature   A cup of coffee is poured and left sitting on a desk. Its temperature (measured in degrees Fahrenheit) is a function of the number of minutes since it was poured. Let .    Identify the input and output variables, making sure to state their specific units.   The input variable is time , and its units are minutes. The output variable is the temperature of the coffee , and its units are degrees Fahrenheit.     Interpret the meaning of the statement in the context of this scenario.   Ten minutes after the cup of coffee was poured, it has cooled to a temperature of exactly 145 degrees Fahrenheit.      Explain what the equation is asking, and describe what a solution to that equation would tell you about the coffee. How is this different from the question in part (b)?    This equation is asking us to find the specific time (or times) at which the coffee's temperature reaches exactly 100 degrees Fahrenheit. If we were to solve the equation, the resulting number would tell us how many minutes the coffee had been sitting on the desk before it hit that temperature threshold.  The difference between this and part (b) is the direction of the evaluation. In part (b), the input time ( minutes) was provided to us, and we evaluated the function to report the output temperature. Here, the output temperature ( degrees) is the known value, and we are working backwards to solve for the unknown input time.    "
},
{
  "id": "activity-average-rate-of-change",
  "level": "1",
  "url": "activity-average-rate-of-change.html",
  "type": "Worksheet",
  "number": "",
  "title": "Activity: Average Rate of Change",
  "body": " Activity: Average Rate of Change      The average rate of change of a function from to is:     This is the change in output divided by the change in input. Three things to keep in mind: Only the two endpoints matter, no matter what happens in between. The units are always output units per input unit. A negative answer means the output decreased across the interval, not that the function was negative.   Worked Example: Find the average rate of change of on the interval .   Solution: Evaluate at both endpoints first, then divide.   The average rate of change is . On average, the output drops by units for each unit increase in the input across this interval.    Find the average rate of change of on the interval .    First, evaluate the function at the endpoints and : Next, apply the average rate of change formula: The average rate of change is .      Find the average rate of change of on the interval .    Evaluate the function at the endpoints and : Apply the formula, being very careful with subtracting negative numbers in the denominator: The average rate of change is .      Find the average rate of change of on the interval .    Evaluate the function at the endpoints and : Apply the average rate of change formula: The average rate of change is .          Worked Example: A new app is gaining subscribers. The total number of subscribers after weeks is given below. Find the average rate of change from to and interpret it.    (weeks)         (subscribers)          Solution: Read the two endpoint columns, and . Then:   The average rate of change is subscribers per week. Between week and week , the app gained an average of new subscribers each week. The columns at and never entered the computation.   Practice: A large tank is being drained, and is the amount of water left in the tank after minutes.    (minutes)         (gallons)           Consider the interval from to .     Determine the average rate of change of the water amount on this interval, and state its units.    Using the table, and . Apply the formula: The average rate of change is gallons per minute.      Describe the meaning of your result in the context of the question. Write a full sentence that does not use the letters or .    Between and minutes after draining began, the tank lost an average of gallons of water each minute.       Now consider the interval from to .     Determine the average rate of change of the water amount on this interval.    Using the table, and . Apply the formula: The average rate of change is gallons per minute.      Compare your answer to the one from the previous interval. During which stretch of time was the tank draining faster? Explain how you can tell from the two numbers.    The tank drained faster over the first ten minutes. It was losing gallons per minute there compared with gallons per minute on the later interval. Both values are negative (indicating a loss of water), so the comparison is about which rate is farther from zero, not which is larger as a signed number. This demonstrates that the average rate of change depends heavily on the specific interval you choose.           Worked Example: The graph of is shown below. Find the average rate of change of from to .    A downward opening parabola with a dashed line connecting the points (0,2) and (2,0).      Solution: Read the outputs off the graph: and . Then:   The average rate of change is . Notice that this is exactly the slope of the dashed line drawn through the two points on the curve, which is what the average rate of change visually measures.    The graph of is shown below.    An upward opening parabola passing through the points (-2,0), (0,-2), and (2,0).        Find the average rate of change of from to .    Reading the points from the graph, we have and . Applying the formula: The average rate of change is .      Find the average rate of change of from to .    Reading the points from the graph, we have and . Applying the formula: The average rate of change is .      Your two answers have opposite signs even though the graph is one smooth curve. Explain what each sign is telling you about the outputs on that interval.    The negative answer on the first interval tells us that the outputs decreased on the way from to . The positive answer on the second interval tells us that the outputs increased from to . Because the curve turns around at the bottom vertex, the sign of the average rate of change flips depending on which side of the low point the interval is located.           Worked Example: Suppose is the height in feet of an object dropped from a building after seconds. Find the average rate of change of on and describe what it means.   Solution: Evaluate at both endpoints. Then apply the formula:   The average rate of change is feet per second. During the first seconds of the fall, the object drops an average of feet each second, so its average velocity over that stretch is feet per second downward.    Suppose is the height in feet of an object dropped from a building after seconds.     Find the average rate of change of on , and state its units.    Evaluate the function at and : Apply the formula: The average rate of change is feet per second.      Describe in words what your answer to part (a) means. Your sentence should mention the object, the time, and the direction it is moving.    Between and seconds after the object was dropped, its height decreased by an average of feet each second, meaning it was moving downward at an average velocity of ft\/s.       A delivery van is purchased new, and its value in dollars after years is given by .     Find the average rate of change of on , and state its units.    Evaluate the function at and : Apply the formula: The average rate of change is dollars per year.      Find the average rate of change of on .    Evaluate the function at and : Apply the formula: The average rate of change is dollars per year.      You should have gotten the same answer twice. What is it about this particular function that makes the average rate of change come out the same on every interval?     is a linear function, and its slope is . For any line, the average rate of change between any two points is exactly equal to the constant slope of the line, which is why the specific interval chosen does not matter. For every other non-linear function type in this activity, the interval will change the result.      "
},
{
  "id": "aroc-formula-1",
  "level": "2",
  "url": "activity-average-rate-of-change.html#aroc-formula-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  The average rate of change of a function from to is:     This is the change in output divided by the change in input. Three things to keep in mind: Only the two endpoints matter, no matter what happens in between. The units are always output units per input unit. A negative answer means the output decreased across the interval, not that the function was negative.   Worked Example: Find the average rate of change of on the interval .   Solution: Evaluate at both endpoints first, then divide.   The average rate of change is . On average, the output drops by units for each unit increase in the input across this interval.    Find the average rate of change of on the interval .    First, evaluate the function at the endpoints and : Next, apply the average rate of change formula: The average rate of change is .   "
},
{
  "id": "aroc-formula-2",
  "level": "2",
  "url": "activity-average-rate-of-change.html#aroc-formula-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Find the average rate of change of on the interval .    Evaluate the function at the endpoints and : Apply the formula, being very careful with subtracting negative numbers in the denominator: The average rate of change is .   "
},
{
  "id": "aroc-formula-3",
  "level": "2",
  "url": "activity-average-rate-of-change.html#aroc-formula-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Find the average rate of change of on the interval .    Evaluate the function at the endpoints and : Apply the average rate of change formula: The average rate of change is .   "
},
{
  "id": "aroc-table-1",
  "level": "2",
  "url": "activity-average-rate-of-change.html#aroc-table-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "   Worked Example: A new app is gaining subscribers. The total number of subscribers after weeks is given below. Find the average rate of change from to and interpret it.    (weeks)         (subscribers)          Solution: Read the two endpoint columns, and . Then:   The average rate of change is subscribers per week. Between week and week , the app gained an average of new subscribers each week. The columns at and never entered the computation.   Practice: A large tank is being drained, and is the amount of water left in the tank after minutes.    (minutes)         (gallons)           Consider the interval from to .     Determine the average rate of change of the water amount on this interval, and state its units.    Using the table, and . Apply the formula: The average rate of change is gallons per minute.      Describe the meaning of your result in the context of the question. Write a full sentence that does not use the letters or .    Between and minutes after draining began, the tank lost an average of gallons of water each minute.    "
},
{
  "id": "aroc-table-2",
  "level": "2",
  "url": "activity-average-rate-of-change.html#aroc-table-2",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Now consider the interval from to .     Determine the average rate of change of the water amount on this interval.    Using the table, and . Apply the formula: The average rate of change is gallons per minute.      Compare your answer to the one from the previous interval. During which stretch of time was the tank draining faster? Explain how you can tell from the two numbers.    The tank drained faster over the first ten minutes. It was losing gallons per minute there compared with gallons per minute on the later interval. Both values are negative (indicating a loss of water), so the comparison is about which rate is farther from zero, not which is larger as a signed number. This demonstrates that the average rate of change depends heavily on the specific interval you choose.    "
},
{
  "id": "aroc-graph-1",
  "level": "2",
  "url": "activity-average-rate-of-change.html#aroc-graph-1",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "   Worked Example: The graph of is shown below. Find the average rate of change of from to .    A downward opening parabola with a dashed line connecting the points (0,2) and (2,0).      Solution: Read the outputs off the graph: and . Then:   The average rate of change is . Notice that this is exactly the slope of the dashed line drawn through the two points on the curve, which is what the average rate of change visually measures.    The graph of is shown below.    An upward opening parabola passing through the points (-2,0), (0,-2), and (2,0).        Find the average rate of change of from to .    Reading the points from the graph, we have and . Applying the formula: The average rate of change is .      Find the average rate of change of from to .    Reading the points from the graph, we have and . Applying the formula: The average rate of change is .      Your two answers have opposite signs even though the graph is one smooth curve. Explain what each sign is telling you about the outputs on that interval.    The negative answer on the first interval tells us that the outputs decreased on the way from to . The positive answer on the second interval tells us that the outputs increased from to . Because the curve turns around at the bottom vertex, the sign of the average rate of change flips depending on which side of the low point the interval is located.    "
},
{
  "id": "aroc-context-1",
  "level": "2",
  "url": "activity-average-rate-of-change.html#aroc-context-1",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "   Worked Example: Suppose is the height in feet of an object dropped from a building after seconds. Find the average rate of change of on and describe what it means.   Solution: Evaluate at both endpoints. Then apply the formula:   The average rate of change is feet per second. During the first seconds of the fall, the object drops an average of feet each second, so its average velocity over that stretch is feet per second downward.    Suppose is the height in feet of an object dropped from a building after seconds.     Find the average rate of change of on , and state its units.    Evaluate the function at and : Apply the formula: The average rate of change is feet per second.      Describe in words what your answer to part (a) means. Your sentence should mention the object, the time, and the direction it is moving.    Between and seconds after the object was dropped, its height decreased by an average of feet each second, meaning it was moving downward at an average velocity of ft\/s.    "
},
{
  "id": "aroc-context-2",
  "level": "2",
  "url": "activity-average-rate-of-change.html#aroc-context-2",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "  A delivery van is purchased new, and its value in dollars after years is given by .     Find the average rate of change of on , and state its units.    Evaluate the function at and : Apply the formula: The average rate of change is dollars per year.      Find the average rate of change of on .    Evaluate the function at and : Apply the formula: The average rate of change is dollars per year.      You should have gotten the same answer twice. What is it about this particular function that makes the average rate of change come out the same on every interval?     is a linear function, and its slope is . For any line, the average rate of change between any two points is exactly equal to the constant slope of the line, which is why the specific interval chosen does not matter. For every other non-linear function type in this activity, the interval will change the result.    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
