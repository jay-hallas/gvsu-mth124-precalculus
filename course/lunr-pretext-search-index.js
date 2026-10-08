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
  "id": "mth124-act-average-rate-of-change",
  "level": "1",
  "url": "mth124-act-average-rate-of-change.html",
  "type": "Worksheet",
  "number": "",
  "title": "Activity: Average Rate of Change",
  "body": " Activity: Average Rate of Change    Average Rate of Change  The average rate of change of a function from to is the change in output divided by the change in input. Three things to keep in mind. Only the two endpoints matter, no matter what happens in between. The units are always output units per input unit. A negative answer means the output decreased across the interval, not that the function was negative.    Rate of Change from a Formula   Worked Example   Find the average rate of change of on the interval .    Evaluate at both endpoints first, then divide.   The average rate of change is . On average, the output drops by units for each unit increase in the input across this interval.       Find the average rate of change of on the interval .       and , so the average rate of change is .      Find the average rate of change of on the interval .        and , so   Watch the denominator here; students often write instead of .      Find the average rate of change of on the interval .       and , so .       Rate of Change from a Table   Worked Example   A new app is gaining subscribers. The total number of subscribers after weeks is given below. Find the average rate of change from to and interpret it.    (weeks)         (subscribers)           Read the two endpoint columns, and . Then   The average rate of change is subscribers per week. Between week and week , the app gained an average of new subscribers each week. The columns at and never entered the computation.    Questions 4 and 5 both refer to the following table. A large tank is being drained, and is the amount of water left in the tank after minutes.    (minutes)         (gallons)            Consider the interval from to .     Determine the average rate of change of the water amount on this interval, and state its units.    gal\/min    gallons per minute.      Describe the meaning of your result in the context of the question. Write a full sentence that does not use the letters or .    Between and minutes after draining began, the tank lost an average of gallons of water each minute.       Now consider the interval from to .     Determine the average rate of change of the water amount on this interval.    gal\/min    gallons per minute.      Compare your answer to the one from Question 4. During which stretch of time was the tank draining faster? Explain how you can tell from the two numbers.    The tank drained faster over the first ten minutes. It was losing gallons per minute there compared with gallons per minute on the later interval. Both are negative, so the comparison is about which is farther from zero, not which is larger as a signed number. This is a good place to point out that the average rate of change depends on the interval you choose.        Rate of Change from a Graph   Worked Example   The graph of is shown below. Find the average rate of change of from to .   A downward-opening parabola with a dashed line segment joining two points on it.   A downward-opening parabola is drawn on a coordinate grid from x equals negative three to x equals three, with its highest point at zero, two. It crosses the horizontal axis at negative two, zero and two, zero. The points zero, two and two, zero are marked, and a dashed line segment connects them.     h(x) = -0.5*x^2 + 2              Read the outputs off the graph: and . Then   The average rate of change is . Notice that this is exactly the slope of the dashed line drawn through the two points on the curve, which is what the average rate of change measures.       The graph of is shown below.   An upward-opening parabola with three marked points.   An upward-opening parabola is drawn on a coordinate grid from x equals negative three to x equals three, with its lowest point at zero, negative two. The points negative two, zero; zero, negative two; and two, zero are marked on the curve.     f(x) = 0.5*x^2 - 2               Find the average rate of change of from to .       and , so .      Find the average rate of change of from to .       and , so .      Your two answers have opposite signs even though the graph is one smooth curve. Explain what each sign is telling you about the outputs on that interval.    The negative answer says the outputs decreased on the way from to ; the positive answer says they increased from to . The curve turns around at the bottom, so the sign of the average rate of change flips depending on which side of the low point you are on.        Rate of Change in Context   Worked Example   Suppose is the height in feet of an object dropped from a building after seconds. Find the average rate of change of on and describe what it means.    Evaluate at both endpoints. Then   The average rate of change is feet per second. During the first seconds of the fall, the object drops an average of feet each second, so its average velocity over that stretch is feet per second downward.       Suppose is the height in feet of an object dropped from a building after seconds.     Find the average rate of change of on , and state its units.    ft\/s     and , so feet per second.      Describe in words what your answer to part (a) means. Your sentence should mention the object, the time, and the direction it is moving.    Between and seconds after the object was dropped, its height decreased by an average of feet each second, meaning it was moving downward.       A delivery van is purchased new, and its value in dollars after years is given by .     Find the average rate of change of on , and state its units.    dollars\/yr     and , so dollars per year.      Find the average rate of change of on .    dollars\/yr     and , so dollars per year.      You should have gotten the same answer twice. What is it about this particular function that makes the average rate of change come out the same on every interval?    is a linear function, and its slope is . For a line, the average rate of change between any two points is just the slope, so the interval does not matter. For every other function type in this activity, it does.      "
},
{
  "id": "aroc-act-example-formula",
  "level": "2",
  "url": "mth124-act-average-rate-of-change.html#aroc-act-example-formula",
  "type": "Example",
  "number": "5",
  "title": "Worked Example.",
  "body": " Worked Example   Find the average rate of change of on the interval .    Evaluate at both endpoints first, then divide.   The average rate of change is . On average, the output drops by units for each unit increase in the input across this interval.   "
},
{
  "id": "aroc-act-rational",
  "level": "2",
  "url": "mth124-act-average-rate-of-change.html#aroc-act-rational",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Find the average rate of change of on the interval .       and , so the average rate of change is .   "
},
{
  "id": "aroc-act-quadratic",
  "level": "2",
  "url": "mth124-act-average-rate-of-change.html#aroc-act-quadratic",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Find the average rate of change of on the interval .        and , so   Watch the denominator here; students often write instead of .   "
},
{
  "id": "aroc-act-radical",
  "level": "2",
  "url": "mth124-act-average-rate-of-change.html#aroc-act-radical",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Find the average rate of change of on the interval .       and , so .   "
},
{
  "id": "aroc-act-example-table",
  "level": "2",
  "url": "mth124-act-average-rate-of-change.html#aroc-act-example-table",
  "type": "Example",
  "number": "6",
  "title": "Worked Example.",
  "body": " Worked Example   A new app is gaining subscribers. The total number of subscribers after weeks is given below. Find the average rate of change from to and interpret it.    (weeks)         (subscribers)           Read the two endpoint columns, and . Then   The average rate of change is subscribers per week. Between week and week , the app gained an average of new subscribers each week. The columns at and never entered the computation.   "
},
{
  "id": "aroc-act-tank-later",
  "level": "2",
  "url": "mth124-act-average-rate-of-change.html#aroc-act-tank-later",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Consider the interval from to .     Determine the average rate of change of the water amount on this interval, and state its units.    gal\/min    gallons per minute.      Describe the meaning of your result in the context of the question. Write a full sentence that does not use the letters or .    Between and minutes after draining began, the tank lost an average of gallons of water each minute.    "
},
{
  "id": "aroc-act-tank-earlier",
  "level": "2",
  "url": "mth124-act-average-rate-of-change.html#aroc-act-tank-earlier",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Now consider the interval from to .     Determine the average rate of change of the water amount on this interval.    gal\/min    gallons per minute.      Compare your answer to the one from Question 4. During which stretch of time was the tank draining faster? Explain how you can tell from the two numbers.    The tank drained faster over the first ten minutes. It was losing gallons per minute there compared with gallons per minute on the later interval. Both are negative, so the comparison is about which is farther from zero, not which is larger as a signed number. This is a good place to point out that the average rate of change depends on the interval you choose.    "
},
{
  "id": "aroc-act-example-graph",
  "level": "2",
  "url": "mth124-act-average-rate-of-change.html#aroc-act-example-graph",
  "type": "Example",
  "number": "7",
  "title": "Worked Example.",
  "body": " Worked Example   The graph of is shown below. Find the average rate of change of from to .   A downward-opening parabola with a dashed line segment joining two points on it.   A downward-opening parabola is drawn on a coordinate grid from x equals negative three to x equals three, with its highest point at zero, two. It crosses the horizontal axis at negative two, zero and two, zero. The points zero, two and two, zero are marked, and a dashed line segment connects them.     h(x) = -0.5*x^2 + 2              Read the outputs off the graph: and . Then   The average rate of change is . Notice that this is exactly the slope of the dashed line drawn through the two points on the curve, which is what the average rate of change measures.   "
},
{
  "id": "aroc-act-graph",
  "level": "2",
  "url": "mth124-act-average-rate-of-change.html#aroc-act-graph",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  The graph of is shown below.   An upward-opening parabola with three marked points.   An upward-opening parabola is drawn on a coordinate grid from x equals negative three to x equals three, with its lowest point at zero, negative two. The points negative two, zero; zero, negative two; and two, zero are marked on the curve.     f(x) = 0.5*x^2 - 2               Find the average rate of change of from to .       and , so .      Find the average rate of change of from to .       and , so .      Your two answers have opposite signs even though the graph is one smooth curve. Explain what each sign is telling you about the outputs on that interval.    The negative answer says the outputs decreased on the way from to ; the positive answer says they increased from to . The curve turns around at the bottom, so the sign of the average rate of change flips depending on which side of the low point you are on.    "
},
{
  "id": "aroc-act-example-context",
  "level": "2",
  "url": "mth124-act-average-rate-of-change.html#aroc-act-example-context",
  "type": "Example",
  "number": "8",
  "title": "Worked Example.",
  "body": " Worked Example   Suppose is the height in feet of an object dropped from a building after seconds. Find the average rate of change of on and describe what it means.    Evaluate at both endpoints. Then   The average rate of change is feet per second. During the first seconds of the fall, the object drops an average of feet each second, so its average velocity over that stretch is feet per second downward.   "
},
{
  "id": "aroc-act-falling",
  "level": "2",
  "url": "mth124-act-average-rate-of-change.html#aroc-act-falling",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "  Suppose is the height in feet of an object dropped from a building after seconds.     Find the average rate of change of on , and state its units.    ft\/s     and , so feet per second.      Describe in words what your answer to part (a) means. Your sentence should mention the object, the time, and the direction it is moving.    Between and seconds after the object was dropped, its height decreased by an average of feet each second, meaning it was moving downward.    "
},
{
  "id": "aroc-act-van",
  "level": "2",
  "url": "mth124-act-average-rate-of-change.html#aroc-act-van",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "  A delivery van is purchased new, and its value in dollars after years is given by .     Find the average rate of change of on , and state its units.    dollars\/yr     and , so dollars per year.      Find the average rate of change of on .    dollars\/yr     and , so dollars per year.      You should have gotten the same answer twice. What is it about this particular function that makes the average rate of change come out the same on every interval?    is a linear function, and its slope is . For a line, the average rate of change between any two points is just the slope, so the interval does not matter. For every other function type in this activity, it does.    "
},
{
  "id": "mth124-act-linear-functions",
  "level": "1",
  "url": "mth124-act-linear-functions.html",
  "type": "Worksheet",
  "number": "",
  "title": "Activity: Linear Functions",
  "body": " Activity: Linear Functions    Equations of Lines   Linear Equations  A linear function can be written as , where is the slope (constant rate of change) and is the -intercept (starting value). Alternatively, if you know the slope and any point on the line, you can use the point-slope form: .      Find an equation of a line passing through the points and .       First, find the slope. Then use point-slope form with .       Find an equation of a line with slope and -intercept .       We are given and directly. Substituting these into gives .     Linear Tables   Worked Example  To determine if a table of values represents a linear function, check if the average rate of change between every pair of points is constant. Be careful: the -values might not increase by a uniform amount, so you must always compute .      Which of the following tables could represent a linear function? Show your rate calculations to justify your answer.                                       Table for :    Because the rate of change drops from to , is not linear. Students often incorrectly assume it is linear by only looking at the pattern in the -values (which decrease by each time), failing to notice the jump from to in the input.   Table for :    Because the rate of change is consistently between every pair of points,  could be linear.      Make two tables of your own (with at least points each). One table should represent a linear pattern, and the other should not.    Answers will vary. Ensure the linear table has a constant ratio, and the non-linear table does not.       Models from Rate and Initial Value   Sign of the Slope  When reading a word problem, pay attention to whether the context describes growth or loss. If a quantity is increasing , the slope is positive . If a quantity is decreasing , the slope is negative .      Your phone plan comes with GB of data, and you use about GB per week.     Write a linear equation for your remaining data (in GB) after weeks.       The starting data is GB, so . The data is decreasing, so the rate of change is . The equation is .      After how many weeks will your data run out?    weeks    The data runs out when .   The data runs out after weeks.       Suppose years after buying a new car it is worth $21,250, and when it is years old it is worth $10,000. Assume the price of the car depreciates linearly.     Determine a linear function that gives the price years after the car was purchased.       Find the slope using and , then use point-slope form.       What was the initial value of the car when it was purchased?    $25,000    The initial value corresponds to , which is the vertical intercept. The car was originally purchased for $25,000.      When will the car have no value? Based on this, what is a practical domain for your function?    years,    The car has no value when .   The car has no value after about years. The practical domain restricts the model to times before the car's value becomes negative: .      "
},
{
  "id": "lin-act-two-points",
  "level": "2",
  "url": "mth124-act-linear-functions.html#lin-act-two-points",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Find an equation of a line passing through the points and .       First, find the slope. Then use point-slope form with .    "
},
{
  "id": "lin-act-slope-intercept",
  "level": "2",
  "url": "mth124-act-linear-functions.html#lin-act-slope-intercept",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Find an equation of a line with slope and -intercept .       We are given and directly. Substituting these into gives .   "
},
{
  "id": "lin-act-example-tables",
  "level": "2",
  "url": "mth124-act-linear-functions.html#lin-act-example-tables",
  "type": "Example",
  "number": "9",
  "title": "Worked Example.",
  "body": " Worked Example  To determine if a table of values represents a linear function, check if the average rate of change between every pair of points is constant. Be careful: the -values might not increase by a uniform amount, so you must always compute .  "
},
{
  "id": "lin-act-which-linear",
  "level": "2",
  "url": "mth124-act-linear-functions.html#lin-act-which-linear",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Which of the following tables could represent a linear function? Show your rate calculations to justify your answer.                                       Table for :    Because the rate of change drops from to , is not linear. Students often incorrectly assume it is linear by only looking at the pattern in the -values (which decrease by each time), failing to notice the jump from to in the input.   Table for :    Because the rate of change is consistently between every pair of points,  could be linear.   "
},
{
  "id": "lin-act-make-tables",
  "level": "2",
  "url": "mth124-act-linear-functions.html#lin-act-make-tables",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Make two tables of your own (with at least points each). One table should represent a linear pattern, and the other should not.    Answers will vary. Ensure the linear table has a constant ratio, and the non-linear table does not.   "
},
{
  "id": "lin-act-phone-plan",
  "level": "2",
  "url": "mth124-act-linear-functions.html#lin-act-phone-plan",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Your phone plan comes with GB of data, and you use about GB per week.     Write a linear equation for your remaining data (in GB) after weeks.       The starting data is GB, so . The data is decreasing, so the rate of change is . The equation is .      After how many weeks will your data run out?    weeks    The data runs out when .   The data runs out after weeks.    "
},
{
  "id": "lin-act-car-depreciation",
  "level": "2",
  "url": "mth124-act-linear-functions.html#lin-act-car-depreciation",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  Suppose years after buying a new car it is worth $21,250, and when it is years old it is worth $10,000. Assume the price of the car depreciates linearly.     Determine a linear function that gives the price years after the car was purchased.       Find the slope using and , then use point-slope form.       What was the initial value of the car when it was purchased?    $25,000    The initial value corresponds to , which is the vertical intercept. The car was originally purchased for $25,000.      When will the car have no value? Based on this, what is a practical domain for your function?    years,    The car has no value when .   The car has no value after about years. The practical domain restricts the model to times before the car's value becomes negative: .    "
},
{
  "id": "lt-function-notation",
  "level": "1",
  "url": "lt-function-notation.html",
  "type": "Worksheet",
  "number": "",
  "title": "Learning Target 1: Function Notation",
  "body": " Learning Target 1: Function Notation    I can use function notation, find and simplify the output of a function given an input, and find an input that produces a given output; I can do this for functions given by a formula, a table, and a graph.      Problem 1: A Function Given by a Formula   Let .     Find .     .      Find . Show each step of your simplification.     .  The negative input has to be wrapped in parentheses before multiplying, and the denominator has to be finished off before dividing.      Find the input that produces an output of .    We are solving . Multiplying both sides by gives , so and .  The input is .      Is there an input value that this function cannot accept? If so, state it and explain what goes wrong there.    The input has to be excluded. It makes the denominator equal to zero, and division by zero is undefined.        Problem 2: A Function Given by a Table   The function is defined by the table below.                         Find and .     and .      Find all inputs for which .     and . Two different inputs are allowed to share an output, so both count.      Find all inputs for which . Then explain how this question is different from finding .     .  To find , you start in the input row at and read the output underneath it. To solve , you start in the output row at and read back every input above it.  The two questions move through the table in opposite directions, and they happen to have different answers here.      A different rule is recorded in the table below. Can this rule be a function? Why or why not?                    No. The input is assigned two different outputs, and , and a function has to assign exactly one output to each input.  The repeated output is not a problem. Nothing in the definition says two inputs cannot share an output.        Problem 3: A Function Given by a Graph   The function is defined by the graph below.   A graph made of three line segments with corners at the points negative two, negative two and two, two.   The graph consists of three connected line segments drawn on a coordinate grid. The first segment falls from the point negative four, two to the point negative two, negative two. The second segment rises from negative two, negative two to the point two, two. The third segment falls from two, two to the point four, zero. The graph crosses the horizontal axis at negative three, at the origin, and at four.                     Find and .     and .      Find all inputs for which .     , , and . These are the three places where the graph meets the horizontal axis.      Find all inputs for which .     and . One is the left endpoint of the graph and the other is the peak in the middle.      Sketch a graph that is not a function, assuming the horizontal axis holds inputs and the vertical axis holds outputs. Mark one input on your sketch that shows why it fails.    Any graph where some vertical line hits the curve more than once will work.  A circle centered at the origin is one example. The input is paired with two outputs, one at the top of the circle and one at the bottom, so the rule does not assign exactly one output to that input.        Problem 4: Function Notation in Context   A driver leaves Grand Rapids for a trip downstate. The distance still remaining in the trip, , measured in miles, is a function of the time , measured in hours since the driver left. Write .     Identify the input and output variables, and state the units of each.    The input is the time since the driver left, measured in hours. The output is the distance remaining, measured in miles.      Explain in writing what means in this situation.    Three hours after the driver left, there are still 145 miles left in the trip.  A complete interpretation names the input value, the output value, and the units on each, without using the letters or .      Explain what the equation is asking, and describe what a solution to it would tell you about the trip. How is this different from the previous question?    It asks for the time at which the distance remaining is zero miles, so a solution is the number of hours the whole trip took.  In the previous question the input was handed to us and we reported the output. Here the output is handed to us and we solve backwards for the input.      Suppose you divide the change in by the change in over the first three hours. What units does that value carry, and what does it tell you about the drive?    The units are miles per hour. It is the average rate at which the distance remaining is changing, which is the driver's average speed over those three hours.  The value comes out negative, since the distance remaining is going down as time goes up.        Problem 5: Inputs That Are Not Numbers   Let .     Find .     .      Find and simplify completely. Substitute the entire expression everywhere an appears.     .  The common error here is writing for .      Find and simplify. Compare your result to the previous answer and explain what the comparison shows about function notation.    Since , we get .  This is not the same as . The notation means the function is applied to the single input ; it does not mean the output at and the output at get added together.  Function notation does not distribute across a sum.      "
},
{
  "id": "lt-function-notation-2",
  "level": "2",
  "url": "lt-function-notation.html#lt-function-notation-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  I can use function notation, find and simplify the output of a function given an input, and find an input that produces a given output; I can do this for functions given by a formula, a table, and a graph.   "
},
{
  "id": "lt-fn-formula",
  "level": "2",
  "url": "lt-function-notation.html#lt-fn-formula",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Problem 1: A Function Given by a Formula.",
  "body": " Problem 1: A Function Given by a Formula   Let .     Find .     .      Find . Show each step of your simplification.     .  The negative input has to be wrapped in parentheses before multiplying, and the denominator has to be finished off before dividing.      Find the input that produces an output of .    We are solving . Multiplying both sides by gives , so and .  The input is .      Is there an input value that this function cannot accept? If so, state it and explain what goes wrong there.    The input has to be excluded. It makes the denominator equal to zero, and division by zero is undefined.    "
},
{
  "id": "lt-fn-table",
  "level": "2",
  "url": "lt-function-notation.html#lt-fn-table",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Problem 2: A Function Given by a Table.",
  "body": " Problem 2: A Function Given by a Table   The function is defined by the table below.                         Find and .     and .      Find all inputs for which .     and . Two different inputs are allowed to share an output, so both count.      Find all inputs for which . Then explain how this question is different from finding .     .  To find , you start in the input row at and read the output underneath it. To solve , you start in the output row at and read back every input above it.  The two questions move through the table in opposite directions, and they happen to have different answers here.      A different rule is recorded in the table below. Can this rule be a function? Why or why not?                    No. The input is assigned two different outputs, and , and a function has to assign exactly one output to each input.  The repeated output is not a problem. Nothing in the definition says two inputs cannot share an output.    "
},
{
  "id": "lt-fn-graph",
  "level": "2",
  "url": "lt-function-notation.html#lt-fn-graph",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Problem 3: A Function Given by a Graph.",
  "body": " Problem 3: A Function Given by a Graph   The function is defined by the graph below.   A graph made of three line segments with corners at the points negative two, negative two and two, two.   The graph consists of three connected line segments drawn on a coordinate grid. The first segment falls from the point negative four, two to the point negative two, negative two. The second segment rises from negative two, negative two to the point two, two. The third segment falls from two, two to the point four, zero. The graph crosses the horizontal axis at negative three, at the origin, and at four.                     Find and .     and .      Find all inputs for which .     , , and . These are the three places where the graph meets the horizontal axis.      Find all inputs for which .     and . One is the left endpoint of the graph and the other is the peak in the middle.      Sketch a graph that is not a function, assuming the horizontal axis holds inputs and the vertical axis holds outputs. Mark one input on your sketch that shows why it fails.    Any graph where some vertical line hits the curve more than once will work.  A circle centered at the origin is one example. The input is paired with two outputs, one at the top of the circle and one at the bottom, so the rule does not assign exactly one output to that input.    "
},
{
  "id": "lt-fn-context",
  "level": "2",
  "url": "lt-function-notation.html#lt-fn-context",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Problem 4: Function Notation in Context.",
  "body": " Problem 4: Function Notation in Context   A driver leaves Grand Rapids for a trip downstate. The distance still remaining in the trip, , measured in miles, is a function of the time , measured in hours since the driver left. Write .     Identify the input and output variables, and state the units of each.    The input is the time since the driver left, measured in hours. The output is the distance remaining, measured in miles.      Explain in writing what means in this situation.    Three hours after the driver left, there are still 145 miles left in the trip.  A complete interpretation names the input value, the output value, and the units on each, without using the letters or .      Explain what the equation is asking, and describe what a solution to it would tell you about the trip. How is this different from the previous question?    It asks for the time at which the distance remaining is zero miles, so a solution is the number of hours the whole trip took.  In the previous question the input was handed to us and we reported the output. Here the output is handed to us and we solve backwards for the input.      Suppose you divide the change in by the change in over the first three hours. What units does that value carry, and what does it tell you about the drive?    The units are miles per hour. It is the average rate at which the distance remaining is changing, which is the driver's average speed over those three hours.  The value comes out negative, since the distance remaining is going down as time goes up.    "
},
{
  "id": "lt-fn-expression-input",
  "level": "2",
  "url": "lt-function-notation.html#lt-fn-expression-input",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Problem 5: Inputs That Are Not Numbers.",
  "body": " Problem 5: Inputs That Are Not Numbers   Let .     Find .     .      Find and simplify completely. Substitute the entire expression everywhere an appears.     .  The common error here is writing for .      Find and simplify. Compare your result to the previous answer and explain what the comparison shows about function notation.    Since , we get .  This is not the same as . The notation means the function is applied to the single input ; it does not mean the output at and the output at get added together.  Function notation does not distribute across a sum.    "
},
{
  "id": "lt-average-rate-of-change",
  "level": "1",
  "url": "lt-average-rate-of-change.html",
  "type": "Worksheet",
  "number": "",
  "title": "Learning Target 2: Average Rate of Change",
  "body": " Learning Target 2: Average Rate of Change    I can find the average rate of change in a function on a given interval and state the units and interpret the meaning of the average rate of change in applied contexts.      Problem 1: Functions Given by a Formula   Find the average rate of change of each function on the given interval. Show the endpoint outputs before you divide.     Find the average rate of change of on the interval .    Evaluate at the endpoints, then divide.   The average rate of change is . The output drops by an average of units for each unit increase in the input across this interval.      Find the average rate of change of on the interval .    Evaluate at the endpoints, watching the signs on the negative input.   The average rate of change is .      Find the average rate of change of on the interval .    Evaluate at the endpoints, then divide.   The average rate of change is .        Problem 2: A Function Given by a Table   A sugarbush collects maple sap during a run in early spring. Let be the total number of gallons of sap collected hours after tapping began.    (hours)         (gallons)            Find the average rate of change of on the interval , and state its units.    Read the two endpoint columns, and .   The average rate of change is gallons per hour. The column at never entered the computation.      Describe the meaning of your answer in the context of this situation. Write a full sentence that does not use the letters or .    Between and hours after tapping began, the sugarbush collected an average of gallons of sap each hour.      Find the average rate of change of on the interval . Was the sap running faster during this stretch or during the earlier one? Explain how you can tell.    Using and :   The sap ran faster during the later stretch, gallons per hour compared with gallons per hour earlier. Both rates are positive, so the larger number is the faster one here.        Problem 3: A Function Given by a Graph   The function is defined by the graph below.   A graph made of three line segments that falls, then runs flat, then rises.   The graph consists of three connected line segments drawn on a coordinate grid. The first segment falls from the point negative four, three to the point negative one, negative three. The second segment is horizontal, running from negative one, negative three to the point one, negative three. The third segment rises from one, negative three to the point four, three.                     Find the average rate of change of on the interval .    Reading the graph, and .   The average rate of change is .      Find the average rate of change of on the interval .    Reading the graph, and .   The average rate of change is .      Find the average rate of change of on the interval . Explain what your answer says about the outputs at the two endpoints, and why it does not mean the function was flat across the whole interval.    Reading the graph, and .   An average rate of change of means the output ended up at the same height it started at. It says nothing about what happened in between; the graph dropped all the way down to and climbed back. Only the two endpoints go into the computation.        Problem 4: Average Rate of Change in Context   A ball is thrown straight up from the ground. Its height in feet after seconds is given by .     Find the average rate of change of on , and state its units.    Evaluate at the endpoints.   The average rate of change is feet per second.      Describe in words what your answer means. Your sentence should mention the ball, the time, and the direction it is moving.    During the first second after the throw, the ball rose an average of feet each second, so its average velocity over that stretch was feet per second upward.      Find the average rate of change of on . Explain what the sign of this answer tells you, and how the ball's motion on this interval differs from its motion on .    Evaluate at the endpoints.   The average rate of change is feet per second. The negative sign says the height decreased across this interval, so the ball was falling here while it was rising on . It has passed the top of its flight and is on its way back to the ground.        Problem 5: Working Backwards from a Rate   A candle is lit and burns steadily. Let be the height of the candle in centimeters, minutes after it was lit. The average rate of change of on the interval is .     What are the units of this average rate of change?    Centimeters per minute. The units are always the output units divided by the input units.      Interpret the meaning of in this context. Write a full sentence that does not use the letters or .    Between and minutes after the candle was lit, its height dropped by an average of centimeters each minute.      How much shorter was the candle at minutes than it was at minutes? Explain how you got your answer from the rate.    The interval is minutes long, and the candle lost centimeters per minute on average, so the total change in height was centimeters.  The candle was centimeters shorter at minutes than at minutes. This reverses the usual computation: instead of dividing the change in output by the change in input, we multiplied the rate by the length of the interval to recover the change in output.      "
},
{
  "id": "lt-average-rate-of-change-2",
  "level": "2",
  "url": "lt-average-rate-of-change.html#lt-average-rate-of-change-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  I can find the average rate of change in a function on a given interval and state the units and interpret the meaning of the average rate of change in applied contexts.   "
},
{
  "id": "lt-aroc-formulas",
  "level": "2",
  "url": "lt-average-rate-of-change.html#lt-aroc-formulas",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Problem 1: Functions Given by a Formula.",
  "body": " Problem 1: Functions Given by a Formula   Find the average rate of change of each function on the given interval. Show the endpoint outputs before you divide.     Find the average rate of change of on the interval .    Evaluate at the endpoints, then divide.   The average rate of change is . The output drops by an average of units for each unit increase in the input across this interval.      Find the average rate of change of on the interval .    Evaluate at the endpoints, watching the signs on the negative input.   The average rate of change is .      Find the average rate of change of on the interval .    Evaluate at the endpoints, then divide.   The average rate of change is .    "
},
{
  "id": "lt-aroc-table",
  "level": "2",
  "url": "lt-average-rate-of-change.html#lt-aroc-table",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Problem 2: A Function Given by a Table.",
  "body": " Problem 2: A Function Given by a Table   A sugarbush collects maple sap during a run in early spring. Let be the total number of gallons of sap collected hours after tapping began.    (hours)         (gallons)            Find the average rate of change of on the interval , and state its units.    Read the two endpoint columns, and .   The average rate of change is gallons per hour. The column at never entered the computation.      Describe the meaning of your answer in the context of this situation. Write a full sentence that does not use the letters or .    Between and hours after tapping began, the sugarbush collected an average of gallons of sap each hour.      Find the average rate of change of on the interval . Was the sap running faster during this stretch or during the earlier one? Explain how you can tell.    Using and :   The sap ran faster during the later stretch, gallons per hour compared with gallons per hour earlier. Both rates are positive, so the larger number is the faster one here.    "
},
{
  "id": "lt-aroc-graph",
  "level": "2",
  "url": "lt-average-rate-of-change.html#lt-aroc-graph",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Problem 3: A Function Given by a Graph.",
  "body": " Problem 3: A Function Given by a Graph   The function is defined by the graph below.   A graph made of three line segments that falls, then runs flat, then rises.   The graph consists of three connected line segments drawn on a coordinate grid. The first segment falls from the point negative four, three to the point negative one, negative three. The second segment is horizontal, running from negative one, negative three to the point one, negative three. The third segment rises from one, negative three to the point four, three.                     Find the average rate of change of on the interval .    Reading the graph, and .   The average rate of change is .      Find the average rate of change of on the interval .    Reading the graph, and .   The average rate of change is .      Find the average rate of change of on the interval . Explain what your answer says about the outputs at the two endpoints, and why it does not mean the function was flat across the whole interval.    Reading the graph, and .   An average rate of change of means the output ended up at the same height it started at. It says nothing about what happened in between; the graph dropped all the way down to and climbed back. Only the two endpoints go into the computation.    "
},
{
  "id": "lt-aroc-context",
  "level": "2",
  "url": "lt-average-rate-of-change.html#lt-aroc-context",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Problem 4: Average Rate of Change in Context.",
  "body": " Problem 4: Average Rate of Change in Context   A ball is thrown straight up from the ground. Its height in feet after seconds is given by .     Find the average rate of change of on , and state its units.    Evaluate at the endpoints.   The average rate of change is feet per second.      Describe in words what your answer means. Your sentence should mention the ball, the time, and the direction it is moving.    During the first second after the throw, the ball rose an average of feet each second, so its average velocity over that stretch was feet per second upward.      Find the average rate of change of on . Explain what the sign of this answer tells you, and how the ball's motion on this interval differs from its motion on .    Evaluate at the endpoints.   The average rate of change is feet per second. The negative sign says the height decreased across this interval, so the ball was falling here while it was rising on . It has passed the top of its flight and is on its way back to the ground.    "
},
{
  "id": "lt-aroc-interpret",
  "level": "2",
  "url": "lt-average-rate-of-change.html#lt-aroc-interpret",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Problem 5: Working Backwards from a Rate.",
  "body": " Problem 5: Working Backwards from a Rate   A candle is lit and burns steadily. Let be the height of the candle in centimeters, minutes after it was lit. The average rate of change of on the interval is .     What are the units of this average rate of change?    Centimeters per minute. The units are always the output units divided by the input units.      Interpret the meaning of in this context. Write a full sentence that does not use the letters or .    Between and minutes after the candle was lit, its height dropped by an average of centimeters each minute.      How much shorter was the candle at minutes than it was at minutes? Explain how you got your answer from the rate.    The interval is minutes long, and the candle lost centimeters per minute on average, so the total change in height was centimeters.  The candle was centimeters shorter at minutes than at minutes. This reverses the usual computation: instead of dividing the change in output by the change in input, we multiplied the rate by the length of the interval to recover the change in output.    "
},
{
  "id": "lt-linear-functions",
  "level": "1",
  "url": "lt-linear-functions.html",
  "type": "Worksheet",
  "number": "",
  "title": "Learning Target 3: Linear Functions",
  "body": " Learning Target 3: Linear Functions    I can find an equation for any linear function in point-slope and slope-intercept form, given appropriate data or information.      Problem 1: A Line Through Two Points   Find an equation of the line through each pair of points. Give your answer in point-slope form and in slope-intercept form.     The line through and .    Find the slope first.   Using the point , the point-slope form is . The point is the -intercept, so the slope-intercept form is . Using in point-slope form, , is also correct.      The line through and .    Find the slope, then substitute a point.   The point-slope form is and the slope-intercept form is . As a check, .      The line through and .    Find the slope, then substitute a point, watching the signs.   The point-slope form is and the slope-intercept form is . As a check, .        Problem 2: Lines from Other Information   Find an equation of each line in point-slope form and in slope-intercept form.     The line with slope that passes through the point .    The slope and a point go straight into point-slope form.   The point-slope form is and the slope-intercept form is .      The line parallel to that passes through the point .    Solve the given equation for to read off its slope.   Parallel lines have the same slope, so the new line has slope .   The point-slope form is and the slope-intercept form is .      The line that has the same -intercept as and passes through the point .    From the previous part, is the same line as , so its -intercept is . The new line passes through and .   The slope-intercept form is . Using the point , the point-slope form is .        Problem 3: Lines Given by a Table and a Graph   The function is defined by the table below.                  The function is defined by the graph below.   A straight line falling from left to right with two marked points.   A straight line is drawn on a coordinate grid. It falls from left to right and passes through the marked points negative two, four and two, negative two. It crosses the vertical axis at the point zero, one.                 Show that the table could come from a linear function by computing the rate of change between each pair of consecutive columns.    Compute the change in output over the change in input for each pair of neighboring columns.   The rate of change is every time, which is what we expect from a linear function. Notice the inputs are not evenly spaced, so comparing the changes in output alone would not be enough.      Find an equation for in point-slope form and in slope-intercept form.    The slope is . Using the point :   The point-slope form is and the slope-intercept form is . As a check, .      Find an equation for in point-slope form and in slope-intercept form.    Reading the graph, the line passes through and .   The point-slope form is and the slope-intercept form is . The graph crosses the vertical axis at , which agrees with the intercept.        Problem 4: Interpreting a Linear Model   Terry is skiing down a steep hill. Terry's elevation in feet, seconds after starting, is given by , where can be any number from to .     Explain what and mean in this context. Write full sentences that do not use the letters or , and include units.    Terry started the run at an elevation of feet. Terry's elevation dropped by feet every second, so Terry was descending at a rate of feet per second.      Dana skis a different run. Dana's elevation is feet after seconds and feet after seconds. Assuming Dana's elevation changes at a constant rate, find a formula for Dana's elevation in slope-intercept form.    The data give the points and .   Dana's elevation is feet.      Who is descending faster, Terry or Dana? Who started at a higher elevation? Explain how you can tell from the two formulas.    Terry is descending faster. The slopes tell us Terry drops feet each second while Dana drops only feet each second. Terry also started higher; the constant terms show Terry began at feet and Dana began at feet.        Problem 5: Building a Linear Model   Let be the value of a car in dollars, years after it is purchased. The value of the car changes at a constant rate. The car is worth five years after purchase and ten years after purchase.     Find a formula for in slope-intercept form. State the units of the slope.    The data give the points and .   The model is . The slope is dollars per year, so the car loses in value each year.      What was the value of the car when it was purchased?    At purchase, , and . The car was worth when it was bought.      When will the car have no value left?    Set the value equal to zero and solve.   The car will have no value years after it is purchased.      Based on your answer to the previous part, what is a reasonable domain for this model? Explain.    A reasonable domain is . The model starts when the car is purchased, and after years it would give negative values, which make no sense for the value of a car.      "
},
{
  "id": "lt-linear-functions-2",
  "level": "2",
  "url": "lt-linear-functions.html#lt-linear-functions-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  I can find an equation for any linear function in point-slope and slope-intercept form, given appropriate data or information.   "
},
{
  "id": "lt-lin-two-points",
  "level": "2",
  "url": "lt-linear-functions.html#lt-lin-two-points",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Problem 1: A Line Through Two Points.",
  "body": " Problem 1: A Line Through Two Points   Find an equation of the line through each pair of points. Give your answer in point-slope form and in slope-intercept form.     The line through and .    Find the slope first.   Using the point , the point-slope form is . The point is the -intercept, so the slope-intercept form is . Using in point-slope form, , is also correct.      The line through and .    Find the slope, then substitute a point.   The point-slope form is and the slope-intercept form is . As a check, .      The line through and .    Find the slope, then substitute a point, watching the signs.   The point-slope form is and the slope-intercept form is . As a check, .    "
},
{
  "id": "lt-lin-other-info",
  "level": "2",
  "url": "lt-linear-functions.html#lt-lin-other-info",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Problem 2: Lines from Other Information.",
  "body": " Problem 2: Lines from Other Information   Find an equation of each line in point-slope form and in slope-intercept form.     The line with slope that passes through the point .    The slope and a point go straight into point-slope form.   The point-slope form is and the slope-intercept form is .      The line parallel to that passes through the point .    Solve the given equation for to read off its slope.   Parallel lines have the same slope, so the new line has slope .   The point-slope form is and the slope-intercept form is .      The line that has the same -intercept as and passes through the point .    From the previous part, is the same line as , so its -intercept is . The new line passes through and .   The slope-intercept form is . Using the point , the point-slope form is .    "
},
{
  "id": "lt-lin-table-graph",
  "level": "2",
  "url": "lt-linear-functions.html#lt-lin-table-graph",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Problem 3: Lines Given by a Table and a Graph.",
  "body": " Problem 3: Lines Given by a Table and a Graph   The function is defined by the table below.                  The function is defined by the graph below.   A straight line falling from left to right with two marked points.   A straight line is drawn on a coordinate grid. It falls from left to right and passes through the marked points negative two, four and two, negative two. It crosses the vertical axis at the point zero, one.                 Show that the table could come from a linear function by computing the rate of change between each pair of consecutive columns.    Compute the change in output over the change in input for each pair of neighboring columns.   The rate of change is every time, which is what we expect from a linear function. Notice the inputs are not evenly spaced, so comparing the changes in output alone would not be enough.      Find an equation for in point-slope form and in slope-intercept form.    The slope is . Using the point :   The point-slope form is and the slope-intercept form is . As a check, .      Find an equation for in point-slope form and in slope-intercept form.    Reading the graph, the line passes through and .   The point-slope form is and the slope-intercept form is . The graph crosses the vertical axis at , which agrees with the intercept.    "
},
{
  "id": "lt-lin-interpret",
  "level": "2",
  "url": "lt-linear-functions.html#lt-lin-interpret",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Problem 4: Interpreting a Linear Model.",
  "body": " Problem 4: Interpreting a Linear Model   Terry is skiing down a steep hill. Terry's elevation in feet, seconds after starting, is given by , where can be any number from to .     Explain what and mean in this context. Write full sentences that do not use the letters or , and include units.    Terry started the run at an elevation of feet. Terry's elevation dropped by feet every second, so Terry was descending at a rate of feet per second.      Dana skis a different run. Dana's elevation is feet after seconds and feet after seconds. Assuming Dana's elevation changes at a constant rate, find a formula for Dana's elevation in slope-intercept form.    The data give the points and .   Dana's elevation is feet.      Who is descending faster, Terry or Dana? Who started at a higher elevation? Explain how you can tell from the two formulas.    Terry is descending faster. The slopes tell us Terry drops feet each second while Dana drops only feet each second. Terry also started higher; the constant terms show Terry began at feet and Dana began at feet.    "
},
{
  "id": "lt-lin-model",
  "level": "2",
  "url": "lt-linear-functions.html#lt-lin-model",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Problem 5: Building a Linear Model.",
  "body": " Problem 5: Building a Linear Model   Let be the value of a car in dollars, years after it is purchased. The value of the car changes at a constant rate. The car is worth five years after purchase and ten years after purchase.     Find a formula for in slope-intercept form. State the units of the slope.    The data give the points and .   The model is . The slope is dollars per year, so the car loses in value each year.      What was the value of the car when it was purchased?    At purchase, , and . The car was worth when it was bought.      When will the car have no value left?    Set the value equal to zero and solve.   The car will have no value years after it is purchased.      Based on your answer to the previous part, what is a reasonable domain for this model? Explain.    A reasonable domain is . The model starts when the car is purchased, and after years it would give negative values, which make no sense for the value of a car.    "
},
{
  "id": "lt-composition",
  "level": "1",
  "url": "lt-composition.html",
  "type": "Worksheet",
  "number": "",
  "title": "Learning Target 4: Composition of Functions",
  "body": " Learning Target 4: Composition of Functions    I can find and simplify values of the composition of two functions; I can do this for functions given by a formula, a table, and a graph.      Problem 1: Functions Given by a Table   The functions and are defined by the table below. Find each value if it exists. If a value does not exist, briefly explain why.                                     Work from the inside out. From the table, , so .         From the table, , so .         From the table, , so .         From the table, , so . The input does not appear in the table, so we have no value for . The value does not exist.         From the table, , so .        Problem 2: Functions Given by a Formula   Let and .     Find and simplify .    Substitute the whole expression for the input of , then expand.   Note that is not ; the middle term comes from multiplying out completely.      Find and simplify .    Substitute the whole expression for the input of .       Find and . What do your answers tell you about the order of composition?    Work from the inside out for each one.   We get and . The two answers are different, so the order matters; and are usually different functions. As a check, the formula from the first part gives .        Problem 3: Functions Given by a Graph   The graph of is shown on the left and the graph of is shown on the right.    The graph of f, made of three line segments that rise, run flat, then fall.   The graph of f consists of three connected line segments. The first segment rises from the point negative four, negative three to the point negative one, three. The second segment is horizontal, running from negative one, three to the point two, three. The third segment falls from two, three to the point four, negative one.                   The graph of g, a peak shape made of two line segments.   The graph of g consists of two connected line segments. The first segment rises from the point negative four, negative two to the point zero, two. The second segment falls from zero, two to the point four, negative two.                    Find .    Reading the graph of , . Reading the graph of , . So .      Find .    Reading the graph of , . Reading the graph of , . So .      Find .    Both steps use the graph of . First , and then . So .      Find and . Explain which graph you read first for each one.    For , the inside function is , so read the graph of first: , and then . So .  For , the inside function is , so read the graph of first: , and then . So .        Problem 4: Mixing a Formula and a Table   Let , and let be the function defined by the table below. Find each value if it exists. If a value does not exist, briefly explain why.                            Use the formula first: . Then use the table: . So .         Use the table first: . Then use the formula: . So .         Use the table first: . Then use the formula: . So .         Use the formula first: . That makes the outer value , but is not an input in the table. The value does not exist.        Problem 5: Composition in Context   Let be the number of miles traveled hours after starting a trip, and let be the function that converts miles to kilometers. Define a new function by .     What are the input and the output of ? Include units.    The input of is the input of , time in hours. The output of is the output of , distance in kilometers.      Write a full sentence explaining what represents.    The value is the number of kilometers traveled hours after the trip started. The function turns the time into miles, and then turns those miles into kilometers.      Suppose the car travels at a steady speed, so that . Find and simplify a formula for . Then find and explain what it means.    Substitute for the input of .   Two hours after the trip started, the car had traveled kilometers.      Explain why does not make sense in this situation.    The output of is a distance in kilometers, but the input of must be a time in hours. The output of the inside function does not match the kind of input the outside function expects, so the composition has no meaning here.      "
},
{
  "id": "lt-composition-2",
  "level": "2",
  "url": "lt-composition.html#lt-composition-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  I can find and simplify values of the composition of two functions; I can do this for functions given by a formula, a table, and a graph.   "
},
{
  "id": "lt-comp-table",
  "level": "2",
  "url": "lt-composition.html#lt-comp-table",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Problem 1: Functions Given by a Table.",
  "body": " Problem 1: Functions Given by a Table   The functions and are defined by the table below. Find each value if it exists. If a value does not exist, briefly explain why.                                     Work from the inside out. From the table, , so .         From the table, , so .         From the table, , so .         From the table, , so . The input does not appear in the table, so we have no value for . The value does not exist.         From the table, , so .    "
},
{
  "id": "lt-comp-formula",
  "level": "2",
  "url": "lt-composition.html#lt-comp-formula",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Problem 2: Functions Given by a Formula.",
  "body": " Problem 2: Functions Given by a Formula   Let and .     Find and simplify .    Substitute the whole expression for the input of , then expand.   Note that is not ; the middle term comes from multiplying out completely.      Find and simplify .    Substitute the whole expression for the input of .       Find and . What do your answers tell you about the order of composition?    Work from the inside out for each one.   We get and . The two answers are different, so the order matters; and are usually different functions. As a check, the formula from the first part gives .    "
},
{
  "id": "lt-comp-graph",
  "level": "2",
  "url": "lt-composition.html#lt-comp-graph",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Problem 3: Functions Given by a Graph.",
  "body": " Problem 3: Functions Given by a Graph   The graph of is shown on the left and the graph of is shown on the right.    The graph of f, made of three line segments that rise, run flat, then fall.   The graph of f consists of three connected line segments. The first segment rises from the point negative four, negative three to the point negative one, three. The second segment is horizontal, running from negative one, three to the point two, three. The third segment falls from two, three to the point four, negative one.                   The graph of g, a peak shape made of two line segments.   The graph of g consists of two connected line segments. The first segment rises from the point negative four, negative two to the point zero, two. The second segment falls from zero, two to the point four, negative two.                    Find .    Reading the graph of , . Reading the graph of , . So .      Find .    Reading the graph of , . Reading the graph of , . So .      Find .    Both steps use the graph of . First , and then . So .      Find and . Explain which graph you read first for each one.    For , the inside function is , so read the graph of first: , and then . So .  For , the inside function is , so read the graph of first: , and then . So .    "
},
{
  "id": "lt-comp-mixed",
  "level": "2",
  "url": "lt-composition.html#lt-comp-mixed",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Problem 4: Mixing a Formula and a Table.",
  "body": " Problem 4: Mixing a Formula and a Table   Let , and let be the function defined by the table below. Find each value if it exists. If a value does not exist, briefly explain why.                            Use the formula first: . Then use the table: . So .         Use the table first: . Then use the formula: . So .         Use the table first: . Then use the formula: . So .         Use the formula first: . That makes the outer value , but is not an input in the table. The value does not exist.    "
},
{
  "id": "lt-comp-context",
  "level": "2",
  "url": "lt-composition.html#lt-comp-context",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Problem 5: Composition in Context.",
  "body": " Problem 5: Composition in Context   Let be the number of miles traveled hours after starting a trip, and let be the function that converts miles to kilometers. Define a new function by .     What are the input and the output of ? Include units.    The input of is the input of , time in hours. The output of is the output of , distance in kilometers.      Write a full sentence explaining what represents.    The value is the number of kilometers traveled hours after the trip started. The function turns the time into miles, and then turns those miles into kilometers.      Suppose the car travels at a steady speed, so that . Find and simplify a formula for . Then find and explain what it means.    Substitute for the input of .   Two hours after the trip started, the car had traveled kilometers.      Explain why does not make sense in this situation.    The output of is a distance in kilometers, but the input of must be a time in hours. The output of the inside function does not match the kind of input the outside function expects, so the composition has no meaning here.    "
},
{
  "id": "lt5-inverses",
  "level": "1",
  "url": "lt5-inverses.html",
  "type": "Worksheet",
  "number": "",
  "title": "Learning Target 5: Inverse Functions",
  "body": " Learning Target 5: Inverse Functions    I can determine whether a function has an inverse with justification and find values of the inverse given input-output pairs of the original.         Problem 1: Functions Given by a Table   Each table below defines a function. Decide whether the function has an inverse function, and justify your answer.                         Yes. The outputs , , , , and are all different, so each output comes from exactly one input. Reversing the table gives a function, so has an inverse.                          No. Two different inputs give the same output: and . If we reversed the table, the input would have to go to both and , which is not a function.                          No. The output comes from both and , and the output comes from both and . Since some outputs come from more than one input, does not have an inverse.      For the function in this problem that has an inverse, find and .    Look for each value in the output row of the table for . Since , we get . Since , we get .           Problem 2: Relationships Given by an Arrow Diagram   Each arrow diagram below sends inputs on the left to outputs on the right. Decide whether the relationship is a function. If it is a function, decide whether it has an inverse function. Justify your answers.      An arrow diagram sending 1 to 8, 2 to 5, and 3 to 11.  Two ovals, the left labeled Input and the right labeled Output. The inputs are 1, 2, and 3, and the outputs are 5, 8, and 11. Arrows go from 1 to 8, from 2 to 5, and from 3 to 11.       \\text{Input}  \\text{Output}  1  2  3  5  8  11           This is a function, since each input has exactly one arrow leaving it. It also has an inverse, since each output has exactly one arrow coming into it. Reversing the arrows sends to , to , and to , which is still a function.       An arrow diagram sending 1 to 6, 2 to 6, and 3 to 9.  Two ovals, the left labeled Input and the right labeled Output. The inputs are 1, 2, and 3, and the outputs are 6 and 9. Arrows go from 1 to 6, from 2 to 6, and from 3 to 9.       \\text{Input}  \\text{Output}  1  2  3  6  9           This is a function, since each input has exactly one arrow leaving it. It does not have an inverse, because the output has two arrows coming into it, from and from . Reversing the arrows would send to two different places.       An arrow diagram sending 1 to 4, 1 to 7, and 2 to 9.  Two ovals, the left labeled Input and the right labeled Output. The inputs are 1 and 2, and the outputs are 4, 7, and 9. Arrows go from 1 to 4, from 1 to 7, and from 2 to 9.       \\text{Input}  \\text{Output}  1  2  4  7  9           This is not a function, because the input has two arrows leaving it, one to and one to . Since it is not a function, the question of an inverse function does not apply.           Problem 3: Functions Given by a Graph   The graphs of three functions , , and are shown below. The horizontal axis shows inputs and the vertical axis shows outputs.    The graph of p, a straight line falling from left to right.  The graph of p is a line segment from the point negative four, three to the point four, negative three. It passes through the origin.         y = p(x)       The graph of q, a U-shaped curve.  The graph of q is a U-shaped curve that opens upward. Its lowest point is zero, negative three, and it passes through negative two, negative one and two, negative one before rising to about negative three and a half, three and three and a half, three.    q(x) = 0.5*x^2 - 3     y = q(x)       The graph of r, three connected line segments that always rise.  The graph of r consists of three connected line segments. The first rises from negative four, negative three to negative one, zero. The second rises more slowly from negative one, zero to two, one. The third rises from two, one to four, four.             y = r(x)          Does have an inverse function? Justify your answer.    Yes. Every horizontal line crosses the graph of at most once, so each output comes from exactly one input.      Does have an inverse function? Justify your answer.    No. The horizontal line crosses the graph twice, at and . So , and the output comes from two different inputs.      Does have an inverse function? Justify your answer.    Yes. The graph of rises the whole way from left to right, so no horizontal line crosses it more than once. Each output comes from exactly one input.      Find and .    To find , look for the point on the graph with output . That point is , so . In the same way, the point is on the graph, so .           Problem 4: Values of an Inverse   The function has an inverse function . Some values of are given in the table below. Find each value.                       and    The inverse takes an output of back to its input. Since , we get . Since , we get . Notice these are not the same, even though the same two numbers appear.      and    Work from the inside out. Since , we have , so . Also , so . In each case, the inverse undoes and we get back the number we started with.      Solve .    We need the input that gives an output of . From the table, , so . This is the same as .      A different function has an inverse, with and . Find and .    Since sends to , the inverse sends back to , so . Since sends to , the function sends to , so .           Problem 5: Inverse of a Linear Function    Let . Find the inverse function . You may start by letting .    Write and solve for .   Writing the inverse with as its input gives .      Find . Then use your answer to check your formula for .    We have . The inverse should send back to , and it does: .      Let . Find the inverse function .    Write and solve for .   So . As a check, and .           Problem 6: An Inverse in Context   A climbing gym charges a flat fee of to reserve its party room, plus per guest. The total cost in dollars for guests is .     Find and explain what it means in a full sentence.    . A party with guests costs .      Find a formula for . What are the input and the output of ? Include units.    Let be the cost and solve for .   So . The input of is a total cost in dollars, and the output is a number of guests.      Find and explain what it means in a full sentence.    . A party that costs has guests.           Problem 7: Creating Examples    On the grid below, sketch the graph of a function that does have an inverse. Assume the horizontal axis shows inputs and the vertical axis shows outputs, as usual.   A blank coordinate grid from negative five to five on each axis.  A blank coordinate grid with x and y axes, running from negative five to five in each direction.            Answers will vary. Any graph that always rises or always falls works, such as the line . Every vertical line crosses it at most once, so it is a function, and every horizontal line crosses it at most once, so it has an inverse.      Complete the table so that it defines a function that does not have an inverse.                      Answers will vary. One example uses the inputs , , , , with the outputs , , , , . The inputs are all different, so it is a function.      Explain why your table is a function, but does not have an inverse.    For the example above, each input appears only once, so each input has exactly one output. But the output comes from two inputs, and , so reversing the table would send to two different values.      "
},
{
  "id": "lt5-inverses-2",
  "level": "2",
  "url": "lt5-inverses.html#lt5-inverses-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  I can determine whether a function has an inverse with justification and find values of the inverse given input-output pairs of the original.   "
},
{
  "id": "lt5-inv-tables",
  "level": "2",
  "url": "lt5-inverses.html#lt5-inv-tables",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Problem 1: Functions Given by a Table.",
  "body": " Problem 1: Functions Given by a Table   Each table below defines a function. Decide whether the function has an inverse function, and justify your answer.                         Yes. The outputs , , , , and are all different, so each output comes from exactly one input. Reversing the table gives a function, so has an inverse.                          No. Two different inputs give the same output: and . If we reversed the table, the input would have to go to both and , which is not a function.                          No. The output comes from both and , and the output comes from both and . Since some outputs come from more than one input, does not have an inverse.      For the function in this problem that has an inverse, find and .    Look for each value in the output row of the table for . Since , we get . Since , we get .    "
},
{
  "id": "lt5-inv-arrows",
  "level": "2",
  "url": "lt5-inverses.html#lt5-inv-arrows",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Problem 2: Relationships Given by an Arrow Diagram.",
  "body": " Problem 2: Relationships Given by an Arrow Diagram   Each arrow diagram below sends inputs on the left to outputs on the right. Decide whether the relationship is a function. If it is a function, decide whether it has an inverse function. Justify your answers.      An arrow diagram sending 1 to 8, 2 to 5, and 3 to 11.  Two ovals, the left labeled Input and the right labeled Output. The inputs are 1, 2, and 3, and the outputs are 5, 8, and 11. Arrows go from 1 to 8, from 2 to 5, and from 3 to 11.       \\text{Input}  \\text{Output}  1  2  3  5  8  11           This is a function, since each input has exactly one arrow leaving it. It also has an inverse, since each output has exactly one arrow coming into it. Reversing the arrows sends to , to , and to , which is still a function.       An arrow diagram sending 1 to 6, 2 to 6, and 3 to 9.  Two ovals, the left labeled Input and the right labeled Output. The inputs are 1, 2, and 3, and the outputs are 6 and 9. Arrows go from 1 to 6, from 2 to 6, and from 3 to 9.       \\text{Input}  \\text{Output}  1  2  3  6  9           This is a function, since each input has exactly one arrow leaving it. It does not have an inverse, because the output has two arrows coming into it, from and from . Reversing the arrows would send to two different places.       An arrow diagram sending 1 to 4, 1 to 7, and 2 to 9.  Two ovals, the left labeled Input and the right labeled Output. The inputs are 1 and 2, and the outputs are 4, 7, and 9. Arrows go from 1 to 4, from 1 to 7, and from 2 to 9.       \\text{Input}  \\text{Output}  1  2  4  7  9           This is not a function, because the input has two arrows leaving it, one to and one to . Since it is not a function, the question of an inverse function does not apply.    "
},
{
  "id": "lt5-inv-graphs",
  "level": "2",
  "url": "lt5-inverses.html#lt5-inv-graphs",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Problem 3: Functions Given by a Graph.",
  "body": " Problem 3: Functions Given by a Graph   The graphs of three functions , , and are shown below. The horizontal axis shows inputs and the vertical axis shows outputs.    The graph of p, a straight line falling from left to right.  The graph of p is a line segment from the point negative four, three to the point four, negative three. It passes through the origin.         y = p(x)       The graph of q, a U-shaped curve.  The graph of q is a U-shaped curve that opens upward. Its lowest point is zero, negative three, and it passes through negative two, negative one and two, negative one before rising to about negative three and a half, three and three and a half, three.    q(x) = 0.5*x^2 - 3     y = q(x)       The graph of r, three connected line segments that always rise.  The graph of r consists of three connected line segments. The first rises from negative four, negative three to negative one, zero. The second rises more slowly from negative one, zero to two, one. The third rises from two, one to four, four.             y = r(x)          Does have an inverse function? Justify your answer.    Yes. Every horizontal line crosses the graph of at most once, so each output comes from exactly one input.      Does have an inverse function? Justify your answer.    No. The horizontal line crosses the graph twice, at and . So , and the output comes from two different inputs.      Does have an inverse function? Justify your answer.    Yes. The graph of rises the whole way from left to right, so no horizontal line crosses it more than once. Each output comes from exactly one input.      Find and .    To find , look for the point on the graph with output . That point is , so . In the same way, the point is on the graph, so .    "
},
{
  "id": "lt5-inv-values",
  "level": "2",
  "url": "lt5-inverses.html#lt5-inv-values",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Problem 4: Values of an Inverse.",
  "body": " Problem 4: Values of an Inverse   The function has an inverse function . Some values of are given in the table below. Find each value.                       and    The inverse takes an output of back to its input. Since , we get . Since , we get . Notice these are not the same, even though the same two numbers appear.      and    Work from the inside out. Since , we have , so . Also , so . In each case, the inverse undoes and we get back the number we started with.      Solve .    We need the input that gives an output of . From the table, , so . This is the same as .      A different function has an inverse, with and . Find and .    Since sends to , the inverse sends back to , so . Since sends to , the function sends to , so .    "
},
{
  "id": "lt5-inv-linear",
  "level": "2",
  "url": "lt5-inverses.html#lt5-inv-linear",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Problem 5: Inverse of a Linear Function.",
  "body": " Problem 5: Inverse of a Linear Function    Let . Find the inverse function . You may start by letting .    Write and solve for .   Writing the inverse with as its input gives .      Find . Then use your answer to check your formula for .    We have . The inverse should send back to , and it does: .      Let . Find the inverse function .    Write and solve for .   So . As a check, and .    "
},
{
  "id": "lt5-inv-context",
  "level": "2",
  "url": "lt5-inverses.html#lt5-inv-context",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Problem 6: An Inverse in Context.",
  "body": " Problem 6: An Inverse in Context   A climbing gym charges a flat fee of to reserve its party room, plus per guest. The total cost in dollars for guests is .     Find and explain what it means in a full sentence.    . A party with guests costs .      Find a formula for . What are the input and the output of ? Include units.    Let be the cost and solve for .   So . The input of is a total cost in dollars, and the output is a number of guests.      Find and explain what it means in a full sentence.    . A party that costs has guests.    "
},
{
  "id": "lt5-inv-examples",
  "level": "2",
  "url": "lt5-inverses.html#lt5-inv-examples",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "Problem 7: Creating Examples.",
  "body": " Problem 7: Creating Examples    On the grid below, sketch the graph of a function that does have an inverse. Assume the horizontal axis shows inputs and the vertical axis shows outputs, as usual.   A blank coordinate grid from negative five to five on each axis.  A blank coordinate grid with x and y axes, running from negative five to five in each direction.            Answers will vary. Any graph that always rises or always falls works, such as the line . Every vertical line crosses it at most once, so it is a function, and every horizontal line crosses it at most once, so it has an inverse.      Complete the table so that it defines a function that does not have an inverse.                      Answers will vary. One example uses the inputs , , , , with the outputs , , , , . The inputs are all different, so it is a function.      Explain why your table is a function, but does not have an inverse.    For the example above, each input appears only once, so each input has exactly one output. But the output comes from two inputs, and , so reversing the table would send to two different values.    "
},
{
  "id": "lt6-circular",
  "level": "1",
  "url": "lt6-circular.html",
  "type": "Worksheet",
  "number": "",
  "title": "Learning Target 6: Graphs of Circular Functions",
  "body": " Learning Target 6: Graphs of Circular Functions    I can generate an accurate, labeled graph of a circular function given appropriate information about the circle being traversed, and describe key features of the function.         Problem 1: Reading a Circular Function from Its Graph   The graph of a circular function is shown below. The dots mark the peaks and troughs of the graph.   The graph of f, a wave with peaks at height 5 and troughs at height 1.  The graph of f is a smooth wave drawn from x equals negative three to x equals nine. It has troughs at the points negative three, one and three, one and nine, one, and peaks at the points zero, five and six, five.    f(x) = 2*cos(pi*x\/3) + 3          y = f(x)         What is the maximum value of ? What is the minimum value of ?    The highest points on the graph are at and the lowest points are at . So the maximum value is and the minimum value is .      Find the equation of the midline. Show how you used the maximum and minimum.    The midline is halfway between the maximum and minimum.   The midline is .      Find the amplitude.    The amplitude is half the distance from the minimum to the maximum.   The amplitude is . This matches the graph, since the peaks are units above the midline .      Find the period. Explain how you read it from the graph.    Two consecutive peaks are at and , so one full wave has a horizontal length of . The period is . Using two consecutive troughs, such as and , gives the same answer. The distance from a peak to the next trough is only , which is half of a period.           Problem 2: A Graph Centered Below the Axis   The graph of a circular function is shown below. The dots mark the peaks and troughs of the graph.   The graph of g, a wave with peaks at height 2 and troughs at height negative 4.  The graph of g is a smooth wave drawn from x equals negative two to x equals ten. It has peaks at the points negative two, two and six, two, and troughs at the points two, negative four and ten, negative four.    g(x) = -3*sin(pi*x\/4) - 1         y = g(x)         What is the maximum value of ? What is the minimum value of ?    The peaks are at and the troughs are at . So the maximum value is and the minimum value is .      Find the equation of the midline. Show how you used the maximum and minimum.    Average the maximum and minimum.   The midline is . Notice the midline is not the -axis for this graph.      Find the amplitude.    Take half the distance from the minimum to the maximum.   The amplitude is . The full height of the wave is , but the amplitude is only half of that.      Find the period. Explain how you read it from the graph.    Two consecutive peaks are at and , so the period is . The troughs at and are also units apart.           Problem 3: A Midline That Is Not a Whole Number   The graph of a circular function is shown below. The dots mark the peaks and troughs of the graph. The midline and amplitude do not have to be whole numbers.   The graph of h, a wave with peaks at height 1 and troughs at height negative 2.  The graph of h is a smooth wave drawn from x equals negative one to x equals eight. It has troughs at the points negative one, negative two and five, negative two, and peaks at the points two, one and eight, one.    h(x) = 1.5*cos(pi*(x - 2)\/3) - 0.5         y = h(x)         What is the maximum value of ? What is the minimum value of ?    The peaks are at and the troughs are at . So the maximum value is and the minimum value is .      Find the equation of the midline. Show how you used the maximum and minimum.    Average the maximum and minimum.   The midline is . A common mistake is to round this to or .      Find the amplitude.    Take half the distance from the minimum to the maximum.   The amplitude is . As a check, the peaks at are units above the midline .      Find the period. Explain how you read it from the graph.    Two consecutive peaks are at and , so the period is . The troughs at and also give . The wave does not start at a peak on the -axis, so measure between two peaks or two troughs rather than starting at .      "
},
{
  "id": "lt6-circular-2",
  "level": "2",
  "url": "lt6-circular.html#lt6-circular-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  I can generate an accurate, labeled graph of a circular function given appropriate information about the circle being traversed, and describe key features of the function.   "
},
{
  "id": "lt6-circ-graph-1",
  "level": "2",
  "url": "lt6-circular.html#lt6-circ-graph-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Problem 1: Reading a Circular Function from Its Graph.",
  "body": " Problem 1: Reading a Circular Function from Its Graph   The graph of a circular function is shown below. The dots mark the peaks and troughs of the graph.   The graph of f, a wave with peaks at height 5 and troughs at height 1.  The graph of f is a smooth wave drawn from x equals negative three to x equals nine. It has troughs at the points negative three, one and three, one and nine, one, and peaks at the points zero, five and six, five.    f(x) = 2*cos(pi*x\/3) + 3          y = f(x)         What is the maximum value of ? What is the minimum value of ?    The highest points on the graph are at and the lowest points are at . So the maximum value is and the minimum value is .      Find the equation of the midline. Show how you used the maximum and minimum.    The midline is halfway between the maximum and minimum.   The midline is .      Find the amplitude.    The amplitude is half the distance from the minimum to the maximum.   The amplitude is . This matches the graph, since the peaks are units above the midline .      Find the period. Explain how you read it from the graph.    Two consecutive peaks are at and , so one full wave has a horizontal length of . The period is . Using two consecutive troughs, such as and , gives the same answer. The distance from a peak to the next trough is only , which is half of a period.    "
},
{
  "id": "lt6-circ-graph-2",
  "level": "2",
  "url": "lt6-circular.html#lt6-circ-graph-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Problem 2: A Graph Centered Below the Axis.",
  "body": " Problem 2: A Graph Centered Below the Axis   The graph of a circular function is shown below. The dots mark the peaks and troughs of the graph.   The graph of g, a wave with peaks at height 2 and troughs at height negative 4.  The graph of g is a smooth wave drawn from x equals negative two to x equals ten. It has peaks at the points negative two, two and six, two, and troughs at the points two, negative four and ten, negative four.    g(x) = -3*sin(pi*x\/4) - 1         y = g(x)         What is the maximum value of ? What is the minimum value of ?    The peaks are at and the troughs are at . So the maximum value is and the minimum value is .      Find the equation of the midline. Show how you used the maximum and minimum.    Average the maximum and minimum.   The midline is . Notice the midline is not the -axis for this graph.      Find the amplitude.    Take half the distance from the minimum to the maximum.   The amplitude is . The full height of the wave is , but the amplitude is only half of that.      Find the period. Explain how you read it from the graph.    Two consecutive peaks are at and , so the period is . The troughs at and are also units apart.    "
},
{
  "id": "lt6-circ-graph-3",
  "level": "2",
  "url": "lt6-circular.html#lt6-circ-graph-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Problem 3: A Midline That Is Not a Whole Number.",
  "body": " Problem 3: A Midline That Is Not a Whole Number   The graph of a circular function is shown below. The dots mark the peaks and troughs of the graph. The midline and amplitude do not have to be whole numbers.   The graph of h, a wave with peaks at height 1 and troughs at height negative 2.  The graph of h is a smooth wave drawn from x equals negative one to x equals eight. It has troughs at the points negative one, negative two and five, negative two, and peaks at the points two, one and eight, one.    h(x) = 1.5*cos(pi*(x - 2)\/3) - 0.5         y = h(x)         What is the maximum value of ? What is the minimum value of ?    The peaks are at and the troughs are at . So the maximum value is and the minimum value is .      Find the equation of the midline. Show how you used the maximum and minimum.    Average the maximum and minimum.   The midline is . A common mistake is to round this to or .      Find the amplitude.    Take half the distance from the minimum to the maximum.   The amplitude is . As a check, the peaks at are units above the midline .      Find the period. Explain how you read it from the graph.    Two consecutive peaks are at and , so the period is . The troughs at and also give . The wave does not start at a peak on the -axis, so measure between two peaks or two troughs rather than starting at .    "
},
{
  "id": "lt7-sinusoidal",
  "level": "1",
  "url": "lt7-sinusoidal.html",
  "type": "Worksheet",
  "number": "",
  "title": "Learning Target 7: Transformed Sine and Cosine Functions",
  "body": " Learning Target 7: Transformed Sine and Cosine Functions    I can find the amplitude, period, and midline of a transformed version of the basic sine or cosine function; and I can find the formulas for transformed versions of the basic sine or cosine function that have certain described properties.         Problem 1: Features from a Formula   Let .     Find the amplitude.    The amplitude is the absolute value of the number in front of cosine, so the amplitude is .      Find the equation of the midline.    The constant added at the end shifts the wave up units, so the midline is .      Find the period. Show your work.    Here , so   The period is . A common mistake is to give or as the period.      What are the maximum and minimum values of ?    The wave goes units above and below the midline. The maximum is and the minimum is .           Problem 2: A Flipped Wave   Let .     Find the amplitude.    The amplitude is . The negative sign flips the wave upside down, but the amplitude is still positive.      Find the equation of the midline.    The midline is .      Find the period. Show your work.    Here , so   The period is .      What are the maximum and minimum values of ?    The maximum is and the minimum is . Even though the wave is flipped, the maximum and minimum are still found by adding and subtracting the amplitude from the midline.           Problem 3: A Ferris Wheel   A Ferris wheel is meters in diameter and is boarded from a platform that is meters above the ground. The six o'clock position on the wheel is level with the loading platform. The wheel completes one full revolution in minutes. The function gives your height in meters above the ground minutes after the wheel begins to turn.     Write an equation for .    You board at the bottom of the wheel, so you start at a minimum and the base model is . The radius is , so the amplitude is . The center of the wheel is meters above the ground, so the midline is . The period is minutes.   The model is .      Use your equation to find and . Explain why these values make sense.    , which is the height of the platform where you board. . After half a revolution you are at the top of the wheel, which is meters above the ground.           Problem 4: A Model from Data   The table below gives values of a sinusoidal function.                           Find a sinusoidal function to match the data.    The largest value is and the smallest is .   At the value is on the midline, and the next value is larger, so the data starts on the midline going up. The base model is . The data is back on the midline going up at , so the period is and . The model is .      Check your function using one value from the table that is not on the midline.    Using : , which matches the table.           Problem 5: A Water Wheel   A water wheel at an old mill has a diameter of meters, and its center is meters above the surface of the river. One bucket on the wheel starts level with the center of the wheel and is moving upward. The wheel completes one full turn every seconds. The function gives the bucket's height in meters above the water seconds after we start watching.     Write an equation for .    The bucket starts at the height of the center and is moving up, so it starts on the midline going up. The base model is . The radius is , so the amplitude is , and the midline is . The period is seconds.   The model is .      What is the minimum value of ? What does it tell you about the bucket?    The minimum is . At the bottom of each turn the bucket is meter below the surface of the river, which is how it fills with water.      "
},
{
  "id": "lt7-sinusoidal-2",
  "level": "2",
  "url": "lt7-sinusoidal.html#lt7-sinusoidal-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  I can find the amplitude, period, and midline of a transformed version of the basic sine or cosine function; and I can find the formulas for transformed versions of the basic sine or cosine function that have certain described properties.   "
},
{
  "id": "lt7-sin-formula-1",
  "level": "2",
  "url": "lt7-sinusoidal.html#lt7-sin-formula-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Problem 1: Features from a Formula.",
  "body": " Problem 1: Features from a Formula   Let .     Find the amplitude.    The amplitude is the absolute value of the number in front of cosine, so the amplitude is .      Find the equation of the midline.    The constant added at the end shifts the wave up units, so the midline is .      Find the period. Show your work.    Here , so   The period is . A common mistake is to give or as the period.      What are the maximum and minimum values of ?    The wave goes units above and below the midline. The maximum is and the minimum is .    "
},
{
  "id": "lt7-sin-formula-2",
  "level": "2",
  "url": "lt7-sinusoidal.html#lt7-sin-formula-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Problem 2: A Flipped Wave.",
  "body": " Problem 2: A Flipped Wave   Let .     Find the amplitude.    The amplitude is . The negative sign flips the wave upside down, but the amplitude is still positive.      Find the equation of the midline.    The midline is .      Find the period. Show your work.    Here , so   The period is .      What are the maximum and minimum values of ?    The maximum is and the minimum is . Even though the wave is flipped, the maximum and minimum are still found by adding and subtracting the amplitude from the midline.    "
},
{
  "id": "lt7-sin-ferris",
  "level": "2",
  "url": "lt7-sinusoidal.html#lt7-sin-ferris",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Problem 3: A Ferris Wheel.",
  "body": " Problem 3: A Ferris Wheel   A Ferris wheel is meters in diameter and is boarded from a platform that is meters above the ground. The six o'clock position on the wheel is level with the loading platform. The wheel completes one full revolution in minutes. The function gives your height in meters above the ground minutes after the wheel begins to turn.     Write an equation for .    You board at the bottom of the wheel, so you start at a minimum and the base model is . The radius is , so the amplitude is . The center of the wheel is meters above the ground, so the midline is . The period is minutes.   The model is .      Use your equation to find and . Explain why these values make sense.    , which is the height of the platform where you board. . After half a revolution you are at the top of the wheel, which is meters above the ground.    "
},
{
  "id": "lt7-sin-table",
  "level": "2",
  "url": "lt7-sinusoidal.html#lt7-sin-table",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Problem 4: A Model from Data.",
  "body": " Problem 4: A Model from Data   The table below gives values of a sinusoidal function.                           Find a sinusoidal function to match the data.    The largest value is and the smallest is .   At the value is on the midline, and the next value is larger, so the data starts on the midline going up. The base model is . The data is back on the midline going up at , so the period is and . The model is .      Check your function using one value from the table that is not on the midline.    Using : , which matches the table.    "
},
{
  "id": "lt7-sin-waterwheel",
  "level": "2",
  "url": "lt7-sinusoidal.html#lt7-sin-waterwheel",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Problem 5: A Water Wheel.",
  "body": " Problem 5: A Water Wheel   A water wheel at an old mill has a diameter of meters, and its center is meters above the surface of the river. One bucket on the wheel starts level with the center of the wheel and is moving upward. The wheel completes one full turn every seconds. The function gives the bucket's height in meters above the water seconds after we start watching.     Write an equation for .    The bucket starts at the height of the center and is moving up, so it starts on the midline going up. The base model is . The radius is , so the amplitude is , and the midline is . The period is seconds.   The model is .      What is the minimum value of ? What does it tell you about the bucket?    The minimum is . At the bottom of each turn the bucket is meter below the surface of the river, which is how it fills with water.    "
},
{
  "id": "lt8-exponential",
  "level": "1",
  "url": "lt8-exponential.html",
  "type": "Worksheet",
  "number": "",
  "title": "Learning Target 8: Finding Exponential Functions",
  "body": " Learning Target 8: Finding Exponential Functions    Given two points or an appropriate collection of features, I can find a formula for an exponential function that has those characteristics.         Problem 1: Two Points, Starting Value Given   An exponential function passes through the points and .     Table strategy. Each time goes up by , the output is multiplied by the same number . Fill in the missing outputs so that this is true.                    Going from to multiplies the output by three times, so . Trying gives , , , , so the missing outputs are and .      Algebra strategy. Use the two points to find and . Write the formula for .    Since , the point gives . Substitute the second point.   So , which matches the table.           Problem 2: Two Points, Starting Value Given   An exponential function passes through the points and .     Use algebra to find and . Write the formula for .    The point gives . Substitute the second point.   We use the positive square root, since the base of an exponential function must be positive. So .      Is an exponential growth or decay function? By what percent does the output change each time goes up by ?    Since , this is exponential decay. A factor of means each output is of the one before it, which is a decrease.      Check your answer by completing the table.                  , and , which matches the given point.           Problem 3: Two Points, No Starting Value   An exponential function passes through the points and .     Table strategy. Fill in the table. Start by finding the growth factor between and , then work backward to .                    From to the output is multiplied by over two steps, so and . Then . Working backward, .      Algebra strategy. Write two equations using the two points. Divide one equation by the other to find , then find . Write the formula for .    The points give and . Divide the second equation by the first.   Then , so , and . The value matches from the table.           Problem 4: Two Points on Opposite Sides of the Axis   An exponential function passes through the points and .     Find and , and write the formula for . You may use a table or algebra.    The points give and . Divide the second equation by the first.   Then , so and .  With a table, the output goes from to over four steps, a total factor of , so each step multiplies by : . The value at is .      Check your formula using the point .    , which matches.           Problem 5: Caffeine in the Body   An -ounce cup of brewed coffee has about milligrams of caffeine. For a typical adult, the body removes about of the caffeine in the bloodstream each hour. Let be the amount of caffeine in milligrams hours after drinking the coffee.     What is the decay factor per hour?    A decrease leaves each hour, so the decay factor is .      Write a formula for .         If you drink the coffee at 3 p.m., how much caffeine is left at 11 p.m.?    That is hours later. milligrams, about a third of the original amount.      About how long until less than milligrams remain? (Desmos may help.)    Graph and . They cross at , so it takes a little over hours.           Problem 6: Rising Rent   An apartment near campus rents for per month this year. The landlord raises the rent by each year. Let be the monthly rent in dollars years from now.     What is the growth factor per year?    A increase means each year's rent is of the year before, so the growth factor is .      Write a formula for .         What will the monthly rent be in years, when a first-year student would be graduating?    , so the rent will be about per month.      About how many years until the rent doubles to ? (Desmos may help.)    Graph and . They cross at , so the rent doubles in a little over years.           Problem 7: Change Over an Interval   A new phone battery holds milliamp-hours (mAh) of charge. A typical lithium-ion battery loses about of its capacity every full charge cycles. Let be the battery's capacity in mAh after full charge cycles.     Write a formula for . Explain why the exponent is not just .    The decay factor is , but it applies once every cycles, not once every cycle. The number of -cycle intervals in cycles is , so   As a check, , which is a loss after cycles. If the exponent were just , the battery would lose after every single charge.      If you fully charge your phone about once a day, you will reach cycles in a little over two years. What will the capacity be then?    mAh.      About how many cycles until the capacity drops to mAh? (Desmos may help.)    Graph and . They cross at , so after about cycles.           Problem 8: A Cooling Model   A cup of coffee is poured at in a room kept at . After minutes, the coffee has cooled to . Let be the temperature of the coffee minutes after it is poured.     Find a model of the form .    Over time the coffee approaches room temperature, so . At , , so . Use the point to find .   The model is .      What is the temperature of the coffee after minutes?    .      Many people find coffee comfortable to drink at about . How long do you need to wait? (Desmos may help.)    Graph and . They cross at , so wait about minutes.           Problem 9: A Warming Model   A can of soda is taken out of a refrigerator at and set on a picnic table outside, where the air temperature is . After minutes, the soda has warmed to . Let be the temperature of the soda minutes after it is set outside.     Find a model of the form .    The soda approaches the air temperature, so . At , , so . The value of is negative because the soda starts below the surrounding temperature. Use the point .   The model is .      What is the temperature of the soda after minutes?    .      How long until the soda reaches ? Will it ever reach ? Explain.    Graph and . They cross at , so after about minutes. The soda never actually reaches , since is always positive. The temperature gets closer and closer to , which is the horizontal asymptote of the graph.      "
},
{
  "id": "lt8-exponential-2",
  "level": "2",
  "url": "lt8-exponential.html#lt8-exponential-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  Given two points or an appropriate collection of features, I can find a formula for an exponential function that has those characteristics.   "
},
{
  "id": "lt8-exp-points-1",
  "level": "2",
  "url": "lt8-exponential.html#lt8-exp-points-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Problem 1: Two Points, Starting Value Given.",
  "body": " Problem 1: Two Points, Starting Value Given   An exponential function passes through the points and .     Table strategy. Each time goes up by , the output is multiplied by the same number . Fill in the missing outputs so that this is true.                    Going from to multiplies the output by three times, so . Trying gives , , , , so the missing outputs are and .      Algebra strategy. Use the two points to find and . Write the formula for .    Since , the point gives . Substitute the second point.   So , which matches the table.    "
},
{
  "id": "lt8-exp-points-2",
  "level": "2",
  "url": "lt8-exponential.html#lt8-exp-points-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Problem 2: Two Points, Starting Value Given.",
  "body": " Problem 2: Two Points, Starting Value Given   An exponential function passes through the points and .     Use algebra to find and . Write the formula for .    The point gives . Substitute the second point.   We use the positive square root, since the base of an exponential function must be positive. So .      Is an exponential growth or decay function? By what percent does the output change each time goes up by ?    Since , this is exponential decay. A factor of means each output is of the one before it, which is a decrease.      Check your answer by completing the table.                  , and , which matches the given point.    "
},
{
  "id": "lt8-exp-points-3",
  "level": "2",
  "url": "lt8-exponential.html#lt8-exp-points-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Problem 3: Two Points, No Starting Value.",
  "body": " Problem 3: Two Points, No Starting Value   An exponential function passes through the points and .     Table strategy. Fill in the table. Start by finding the growth factor between and , then work backward to .                    From to the output is multiplied by over two steps, so and . Then . Working backward, .      Algebra strategy. Write two equations using the two points. Divide one equation by the other to find , then find . Write the formula for .    The points give and . Divide the second equation by the first.   Then , so , and . The value matches from the table.    "
},
{
  "id": "lt8-exp-points-4",
  "level": "2",
  "url": "lt8-exponential.html#lt8-exp-points-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Problem 4: Two Points on Opposite Sides of the Axis.",
  "body": " Problem 4: Two Points on Opposite Sides of the Axis   An exponential function passes through the points and .     Find and , and write the formula for . You may use a table or algebra.    The points give and . Divide the second equation by the first.   Then , so and .  With a table, the output goes from to over four steps, a total factor of , so each step multiplies by : . The value at is .      Check your formula using the point .    , which matches.    "
},
{
  "id": "lt8-exp-caffeine",
  "level": "2",
  "url": "lt8-exponential.html#lt8-exp-caffeine",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Problem 5: Caffeine in the Body.",
  "body": " Problem 5: Caffeine in the Body   An -ounce cup of brewed coffee has about milligrams of caffeine. For a typical adult, the body removes about of the caffeine in the bloodstream each hour. Let be the amount of caffeine in milligrams hours after drinking the coffee.     What is the decay factor per hour?    A decrease leaves each hour, so the decay factor is .      Write a formula for .         If you drink the coffee at 3 p.m., how much caffeine is left at 11 p.m.?    That is hours later. milligrams, about a third of the original amount.      About how long until less than milligrams remain? (Desmos may help.)    Graph and . They cross at , so it takes a little over hours.    "
},
{
  "id": "lt8-exp-rent",
  "level": "2",
  "url": "lt8-exponential.html#lt8-exp-rent",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Problem 6: Rising Rent.",
  "body": " Problem 6: Rising Rent   An apartment near campus rents for per month this year. The landlord raises the rent by each year. Let be the monthly rent in dollars years from now.     What is the growth factor per year?    A increase means each year's rent is of the year before, so the growth factor is .      Write a formula for .         What will the monthly rent be in years, when a first-year student would be graduating?    , so the rent will be about per month.      About how many years until the rent doubles to ? (Desmos may help.)    Graph and . They cross at , so the rent doubles in a little over years.    "
},
{
  "id": "lt8-exp-battery",
  "level": "2",
  "url": "lt8-exponential.html#lt8-exp-battery",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "Problem 7: Change Over an Interval.",
  "body": " Problem 7: Change Over an Interval   A new phone battery holds milliamp-hours (mAh) of charge. A typical lithium-ion battery loses about of its capacity every full charge cycles. Let be the battery's capacity in mAh after full charge cycles.     Write a formula for . Explain why the exponent is not just .    The decay factor is , but it applies once every cycles, not once every cycle. The number of -cycle intervals in cycles is , so   As a check, , which is a loss after cycles. If the exponent were just , the battery would lose after every single charge.      If you fully charge your phone about once a day, you will reach cycles in a little over two years. What will the capacity be then?    mAh.      About how many cycles until the capacity drops to mAh? (Desmos may help.)    Graph and . They cross at , so after about cycles.    "
},
{
  "id": "lt8-exp-cooling",
  "level": "2",
  "url": "lt8-exponential.html#lt8-exp-cooling",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "Problem 8: A Cooling Model.",
  "body": " Problem 8: A Cooling Model   A cup of coffee is poured at in a room kept at . After minutes, the coffee has cooled to . Let be the temperature of the coffee minutes after it is poured.     Find a model of the form .    Over time the coffee approaches room temperature, so . At , , so . Use the point to find .   The model is .      What is the temperature of the coffee after minutes?    .      Many people find coffee comfortable to drink at about . How long do you need to wait? (Desmos may help.)    Graph and . They cross at , so wait about minutes.    "
},
{
  "id": "lt8-exp-heating",
  "level": "2",
  "url": "lt8-exponential.html#lt8-exp-heating",
  "type": "Worksheet Exercise",
  "number": "9",
  "title": "Problem 9: A Warming Model.",
  "body": " Problem 9: A Warming Model   A can of soda is taken out of a refrigerator at and set on a picnic table outside, where the air temperature is . After minutes, the soda has warmed to . Let be the temperature of the soda minutes after it is set outside.     Find a model of the form .    The soda approaches the air temperature, so . At , , so . The value of is negative because the soda starts below the surrounding temperature. Use the point .   The model is .      What is the temperature of the soda after minutes?    .      How long until the soda reaches ? Will it ever reach ? Explain.    Graph and . They cross at , so after about minutes. The soda never actually reaches , since is always positive. The temperature gets closer and closer to , which is the horizontal asymptote of the graph.    "
},
{
  "id": "lt9-graph-shape",
  "level": "1",
  "url": "lt9-graph-shape.html",
  "type": "Worksheet",
  "number": "",
  "title": "Learning Target 9: Increasing, Decreasing, and Concavity",
  "body": " Learning Target 9: Increasing, Decreasing, and Concavity    I can identify the intervals where a function is increasing, decreasing, concave down, or concave up, and I can provide examples of familiar functions that have given increasing \/ decreasing and concave down \/ concave up behaviors.         Problem 1: A Sinusoidal Function   The graph of is shown below on the domain . The dots mark the minimum and maximum.   The graph of T on the interval from 0 to 8, with a minimum at 2 and a maximum at 6.  The graph of T starts at the point zero, one, falls to a minimum at two, negative one, rises through four, one to a maximum at six, three, and falls back to eight, one.    T(x) = -2*sin(pi*x\/4) + 1       y = T(x)         On which intervals is increasing?    The graph rises from the minimum at to the maximum at , so is increasing on .      On which intervals is decreasing?    is decreasing on and on .      What is the midline of ? Find every -value in where the graph crosses the midline.    The midline is . The graph crosses it at , , and . On a sinusoidal graph, the concavity changes each time the graph crosses the midline.      On which intervals is concave up? On which intervals is concave down?    Below the midline the graph bends like a cup, and above the midline it bends like a frown. So is concave up on , where the graph is below , and concave down on , where the graph is above .           Problem 2: Exponential Functions   Each function below has the form . Without graphing, decide whether the function is increasing or decreasing, whether it is concave up or concave down, and whether approaches a value , , or as . Then check your answers with Desmos.        Here , so grows, and is positive. The function is increasing and concave up, and .         Here , but is negative, which flips the growing curve upside down. The function is decreasing and concave down, and .         Here , so decays toward , and is positive. The function is decreasing and concave up, and .         Since and , this is decay, and flips it. The function is increasing and concave down, and . This is the shape of a warming model, like a cold drink approaching room temperature.         Since , this is growth, and is positive. The function is increasing and concave up, and .      Write your own exponential function of the form that is decreasing, concave down, and approaches as .    Answers will vary. We need so the function grows in size, and to flip it upside down. One example is .           Problem 3: A Cubic Function   The graph of a function is shown below on the domain .   The graph of a cubic function f with a local maximum at negative two and a local minimum at two.  The graph of f starts at the point negative four, negative three, rises to a local maximum at negative two, five, falls through the point zero, one to a local minimum at two, negative three, and rises to the point four, five.    f(x) = (x^3 - 12*x)\/4 + 1       y = f(x)         On which intervals is increasing?    is increasing on and on .      On which intervals is decreasing?    is decreasing on , from the high point down to the low point.      At , is the graph concave up or concave down? Explain.    Concave down. Near the graph is part of the hill that peaks at , so it bends like a frown. It is rising, but more and more slowly.      At , is the graph concave up or concave down? Explain.    Concave up. Near the graph is part of the valley with its low point at , so it bends like a cup. It is rising, and more and more quickly.           Problem 4: Quadratic Functions   Consider the two quadratic functions and .     Is always concave up or always concave down? What about the formula tells you this?    Always concave down. The coefficient of is , which is negative, so the parabola opens downward.      Is always concave up or always concave down? What about the formula tells you this?    Always concave up. The coefficient of is , which is positive, so the parabola opens upward.      Find the vertex of . Then give the intervals where is increasing and where it is decreasing.    The vertex is at , and , so the vertex is . Since the parabola opens upward, is decreasing on and increasing on .      Give the intervals where is increasing and where it is decreasing.    The vertex of is at , the point . Since the parabola opens downward, is increasing on and decreasing on .           Problem 5: Sketching from a Description    On the grid below, draw a possible graph of a function such that:   the graph can be drawn without lifting your pencil (continuous) on ,  , , and (plot these first),  is increasing on and decreasing on ,  is concave up on , concave down on , and concave up on .    A blank coordinate grid from negative six to six on each axis.  A blank coordinate grid with x and y axes, running from negative six to six in each direction.            Answers will vary. Starting at , the graph rises slowly at first and then more steeply, bending like a cup until . It keeps rising but starts to level off, bending like a frown, and reaches its highest point at . It then falls, still bending like a frown, more and more steeply until . After it keeps falling but levels out, bending like a cup, and passes through .      At what -values does your graph change concavity?    At and .           Problem 6: Examples of Familiar Functions   For each description, give a formula for a familiar function with that behavior. Sketch a small graph to support your answer. There is more than one correct answer.     Increasing and concave up for all .    Answers will vary. One example is , which rises more and more steeply.      Decreasing and concave up for all .    Answers will vary. One example is , which falls and levels off toward , like a cooling model.      Increasing and concave down for .    Answers will vary. Examples include and . Each rises, but more and more slowly.      Concave down for all , increasing for , and decreasing for .    Answers will vary. A downward-opening parabola with its vertex at works, such as .      "
},
{
  "id": "lt9-graph-shape-2",
  "level": "2",
  "url": "lt9-graph-shape.html#lt9-graph-shape-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  I can identify the intervals where a function is increasing, decreasing, concave down, or concave up, and I can provide examples of familiar functions that have given increasing \/ decreasing and concave down \/ concave up behaviors.   "
},
{
  "id": "lt9-shape-sinusoid",
  "level": "2",
  "url": "lt9-graph-shape.html#lt9-shape-sinusoid",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Problem 1: A Sinusoidal Function.",
  "body": " Problem 1: A Sinusoidal Function   The graph of is shown below on the domain . The dots mark the minimum and maximum.   The graph of T on the interval from 0 to 8, with a minimum at 2 and a maximum at 6.  The graph of T starts at the point zero, one, falls to a minimum at two, negative one, rises through four, one to a maximum at six, three, and falls back to eight, one.    T(x) = -2*sin(pi*x\/4) + 1       y = T(x)         On which intervals is increasing?    The graph rises from the minimum at to the maximum at , so is increasing on .      On which intervals is decreasing?    is decreasing on and on .      What is the midline of ? Find every -value in where the graph crosses the midline.    The midline is . The graph crosses it at , , and . On a sinusoidal graph, the concavity changes each time the graph crosses the midline.      On which intervals is concave up? On which intervals is concave down?    Below the midline the graph bends like a cup, and above the midline it bends like a frown. So is concave up on , where the graph is below , and concave down on , where the graph is above .    "
},
{
  "id": "lt9-shape-exponential",
  "level": "2",
  "url": "lt9-graph-shape.html#lt9-shape-exponential",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Problem 2: Exponential Functions.",
  "body": " Problem 2: Exponential Functions   Each function below has the form . Without graphing, decide whether the function is increasing or decreasing, whether it is concave up or concave down, and whether approaches a value , , or as . Then check your answers with Desmos.        Here , so grows, and is positive. The function is increasing and concave up, and .         Here , but is negative, which flips the growing curve upside down. The function is decreasing and concave down, and .         Here , so decays toward , and is positive. The function is decreasing and concave up, and .         Since and , this is decay, and flips it. The function is increasing and concave down, and . This is the shape of a warming model, like a cold drink approaching room temperature.         Since , this is growth, and is positive. The function is increasing and concave up, and .      Write your own exponential function of the form that is decreasing, concave down, and approaches as .    Answers will vary. We need so the function grows in size, and to flip it upside down. One example is .    "
},
{
  "id": "lt9-shape-cubic",
  "level": "2",
  "url": "lt9-graph-shape.html#lt9-shape-cubic",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Problem 3: A Cubic Function.",
  "body": " Problem 3: A Cubic Function   The graph of a function is shown below on the domain .   The graph of a cubic function f with a local maximum at negative two and a local minimum at two.  The graph of f starts at the point negative four, negative three, rises to a local maximum at negative two, five, falls through the point zero, one to a local minimum at two, negative three, and rises to the point four, five.    f(x) = (x^3 - 12*x)\/4 + 1       y = f(x)         On which intervals is increasing?    is increasing on and on .      On which intervals is decreasing?    is decreasing on , from the high point down to the low point.      At , is the graph concave up or concave down? Explain.    Concave down. Near the graph is part of the hill that peaks at , so it bends like a frown. It is rising, but more and more slowly.      At , is the graph concave up or concave down? Explain.    Concave up. Near the graph is part of the valley with its low point at , so it bends like a cup. It is rising, and more and more quickly.    "
},
{
  "id": "lt9-shape-quadratic",
  "level": "2",
  "url": "lt9-graph-shape.html#lt9-shape-quadratic",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Problem 4: Quadratic Functions.",
  "body": " Problem 4: Quadratic Functions   Consider the two quadratic functions and .     Is always concave up or always concave down? What about the formula tells you this?    Always concave down. The coefficient of is , which is negative, so the parabola opens downward.      Is always concave up or always concave down? What about the formula tells you this?    Always concave up. The coefficient of is , which is positive, so the parabola opens upward.      Find the vertex of . Then give the intervals where is increasing and where it is decreasing.    The vertex is at , and , so the vertex is . Since the parabola opens upward, is decreasing on and increasing on .      Give the intervals where is increasing and where it is decreasing.    The vertex of is at , the point . Since the parabola opens downward, is increasing on and decreasing on .    "
},
{
  "id": "lt9-shape-sketch",
  "level": "2",
  "url": "lt9-graph-shape.html#lt9-shape-sketch",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Problem 5: Sketching from a Description.",
  "body": " Problem 5: Sketching from a Description    On the grid below, draw a possible graph of a function such that:   the graph can be drawn without lifting your pencil (continuous) on ,  , , and (plot these first),  is increasing on and decreasing on ,  is concave up on , concave down on , and concave up on .    A blank coordinate grid from negative six to six on each axis.  A blank coordinate grid with x and y axes, running from negative six to six in each direction.            Answers will vary. Starting at , the graph rises slowly at first and then more steeply, bending like a cup until . It keeps rising but starts to level off, bending like a frown, and reaches its highest point at . It then falls, still bending like a frown, more and more steeply until . After it keeps falling but levels out, bending like a cup, and passes through .      At what -values does your graph change concavity?    At and .    "
},
{
  "id": "lt9-shape-examples",
  "level": "2",
  "url": "lt9-graph-shape.html#lt9-shape-examples",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Problem 6: Examples of Familiar Functions.",
  "body": " Problem 6: Examples of Familiar Functions   For each description, give a formula for a familiar function with that behavior. Sketch a small graph to support your answer. There is more than one correct answer.     Increasing and concave up for all .    Answers will vary. One example is , which rises more and more steeply.      Decreasing and concave up for all .    Answers will vary. One example is , which falls and levels off toward , like a cooling model.      Increasing and concave down for .    Answers will vary. Examples include and . Each rises, but more and more slowly.      Concave down for all , increasing for , and decreasing for .    Answers will vary. A downward-opening parabola with its vertex at works, such as .    "
},
{
  "id": "lt10-exp-log-equations",
  "level": "1",
  "url": "lt10-exp-log-equations.html",
  "type": "Worksheet",
  "number": "",
  "title": "Learning Target 10: Solving Exponential and Logarithmic Equations",
  "body": " Learning Target 10: Solving Exponential and Logarithmic Equations    I can find exact solutions to equations involving exponential and logarithmic expressions in contextual settings.         Problem 1: Base and Base   Solve each equation for . Give the exact solution first, then round to three decimal places.        Take of both sides.          Isolate the exponential expression first.          Take of both sides.                      Problem 2: Other Bases   Solve each equation for . You can take of both sides and use the power rule , or rewrite both sides with a common base when possible. Give exact solutions.           This can also be written as .                   Both and are powers of .          There is no common base, so take of both sides and collect the terms.            Problem 3: Equations with Logarithms   Solve each equation for . Isolate the logarithm, then rewrite the equation in exponential form. Give exact solutions.        In exponential form, .                             , so .           Problem 4: Saving for a Goal   You deposit into a savings account that earns annual interest, compounded monthly. The balance after years is .     How long will it take for the balance to reach ? Give the exact answer, then round to two decimal places.       It takes about years.      About how many monthly compounding periods is that? How can you get this number without solving a new equation?    Each year has compounding periods, so . The balance passes in the th month.           Problem 5: A Used Car   You buy a used car for . Its value decreases by each year.     Write a function for the value of the car in dollars years after you buy it.         How long until the car is worth half of what you paid? Give the exact answer and a decimal approximation.       The car is worth half its price after about years. Notice the answer does not depend on the price, only on the rate.           Problem 6: Bacteria on a Countertop   Under ideal conditions, E. coli bacteria can double about every minutes. A spill on a kitchen counter starts with bacteria. The number of bacteria after minutes is .     How long until there are bacteria? Give the exact answer, then convert to hours.       That is about minutes, or about hours. Wipe up your spills.      Explain why the exponent in the model is and not .    The population doubles once every minutes, not every minute. In minutes there are doubling periods, so the factor of is applied times.           Problem 7: Half-Life of a Medication   Ibuprofen has a half-life of about hours in the body. After a milligram dose, the amount remaining after hours is .     When will milligrams remain? Solve without a calculator.       Since , we need , so hours.      When will milligrams remain? Give the exact answer and a decimal approximation.       About hours after the dose.           Problem 8: Waiting for Coffee to Cool   The temperature of a cup of coffee minutes after it is poured is degrees Fahrenheit.     What are the starting temperature of the coffee and the temperature of the room?    The coffee starts at . The room is , the value the temperature approaches.      When will the coffee reach ? Give the exact answer, then round to the nearest tenth of a minute.       About minutes.      Try to solve . What goes wrong, and what does that mean for the coffee?    We get , but is always positive, so there is no solution. The coffee can never cool below the room temperature of .           Problem 9: Acidity and pH   The pH of a liquid is defined by , where is the concentration of hydrogen ions in moles per liter. Black coffee has a pH of about , and lemon juice has a pH of about .     Find the hydrogen ion concentration of black coffee and of lemon juice. Give exact answers.    For coffee, , so and moles per liter. For lemon juice, moles per liter.      How many times more acidic is lemon juice than black coffee? (Compare the hydrogen ion concentrations.)    . Lemon juice is about times more acidic, even though the pH values differ by only . Each drop of in pH means times more acidic.      "
},
{
  "id": "lt10-exp-log-equations-2",
  "level": "2",
  "url": "lt10-exp-log-equations.html#lt10-exp-log-equations-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  I can find exact solutions to equations involving exponential and logarithmic expressions in contextual settings.   "
},
{
  "id": "lt10-eq-base-e-10",
  "level": "2",
  "url": "lt10-exp-log-equations.html#lt10-eq-base-e-10",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Problem 1: Base <span class=\"process-math\">\\(e\\)<\/span> and Base <span class=\"process-math\">\\(10\\)<\/span>.",
  "body": " Problem 1: Base and Base   Solve each equation for . Give the exact solution first, then round to three decimal places.        Take of both sides.          Isolate the exponential expression first.          Take of both sides.               "
},
{
  "id": "lt10-eq-other-bases",
  "level": "2",
  "url": "lt10-exp-log-equations.html#lt10-eq-other-bases",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Problem 2: Other Bases.",
  "body": " Problem 2: Other Bases   Solve each equation for . You can take of both sides and use the power rule , or rewrite both sides with a common base when possible. Give exact solutions.           This can also be written as .                   Both and are powers of .          There is no common base, so take of both sides and collect the terms.     "
},
{
  "id": "lt10-eq-logs",
  "level": "2",
  "url": "lt10-exp-log-equations.html#lt10-eq-logs",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Problem 3: Equations with Logarithms.",
  "body": " Problem 3: Equations with Logarithms   Solve each equation for . Isolate the logarithm, then rewrite the equation in exponential form. Give exact solutions.        In exponential form, .                             , so .    "
},
{
  "id": "lt10-eq-savings",
  "level": "2",
  "url": "lt10-exp-log-equations.html#lt10-eq-savings",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Problem 4: Saving for a Goal.",
  "body": " Problem 4: Saving for a Goal   You deposit into a savings account that earns annual interest, compounded monthly. The balance after years is .     How long will it take for the balance to reach ? Give the exact answer, then round to two decimal places.       It takes about years.      About how many monthly compounding periods is that? How can you get this number without solving a new equation?    Each year has compounding periods, so . The balance passes in the th month.    "
},
{
  "id": "lt10-eq-car",
  "level": "2",
  "url": "lt10-exp-log-equations.html#lt10-eq-car",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Problem 5: A Used Car.",
  "body": " Problem 5: A Used Car   You buy a used car for . Its value decreases by each year.     Write a function for the value of the car in dollars years after you buy it.         How long until the car is worth half of what you paid? Give the exact answer and a decimal approximation.       The car is worth half its price after about years. Notice the answer does not depend on the price, only on the rate.    "
},
{
  "id": "lt10-eq-bacteria",
  "level": "2",
  "url": "lt10-exp-log-equations.html#lt10-eq-bacteria",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Problem 6: Bacteria on a Countertop.",
  "body": " Problem 6: Bacteria on a Countertop   Under ideal conditions, E. coli bacteria can double about every minutes. A spill on a kitchen counter starts with bacteria. The number of bacteria after minutes is .     How long until there are bacteria? Give the exact answer, then convert to hours.       That is about minutes, or about hours. Wipe up your spills.      Explain why the exponent in the model is and not .    The population doubles once every minutes, not every minute. In minutes there are doubling periods, so the factor of is applied times.    "
},
{
  "id": "lt10-eq-ibuprofen",
  "level": "2",
  "url": "lt10-exp-log-equations.html#lt10-eq-ibuprofen",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "Problem 7: Half-Life of a Medication.",
  "body": " Problem 7: Half-Life of a Medication   Ibuprofen has a half-life of about hours in the body. After a milligram dose, the amount remaining after hours is .     When will milligrams remain? Solve without a calculator.       Since , we need , so hours.      When will milligrams remain? Give the exact answer and a decimal approximation.       About hours after the dose.    "
},
{
  "id": "lt10-eq-cooling",
  "level": "2",
  "url": "lt10-exp-log-equations.html#lt10-eq-cooling",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "Problem 8: Waiting for Coffee to Cool.",
  "body": " Problem 8: Waiting for Coffee to Cool   The temperature of a cup of coffee minutes after it is poured is degrees Fahrenheit.     What are the starting temperature of the coffee and the temperature of the room?    The coffee starts at . The room is , the value the temperature approaches.      When will the coffee reach ? Give the exact answer, then round to the nearest tenth of a minute.       About minutes.      Try to solve . What goes wrong, and what does that mean for the coffee?    We get , but is always positive, so there is no solution. The coffee can never cool below the room temperature of .    "
},
{
  "id": "lt10-eq-ph",
  "level": "2",
  "url": "lt10-exp-log-equations.html#lt10-eq-ph",
  "type": "Worksheet Exercise",
  "number": "9",
  "title": "Problem 9: Acidity and pH.",
  "body": " Problem 9: Acidity and pH   The pH of a liquid is defined by , where is the concentration of hydrogen ions in moles per liter. Black coffee has a pH of about , and lemon juice has a pH of about .     Find the hydrogen ion concentration of black coffee and of lemon juice. Give exact answers.    For coffee, , so and moles per liter. For lemon juice, moles per liter.      How many times more acidic is lemon juice than black coffee? (Compare the hydrogen ion concentrations.)    . Lemon juice is about times more acidic, even though the pH values differ by only . Each drop of in pH means times more acidic.    "
},
{
  "id": "lt11-right-triangles",
  "level": "1",
  "url": "lt11-right-triangles.html",
  "type": "Worksheet",
  "number": "",
  "title": "Learning Target 11: Right Triangles",
  "body": " Learning Target 11: Right Triangles    Given a right triangle with partial information about its sides and angles, I can determine the missing information for the remaining sides and angles, even if the quantities involve an unknown variable.         Problem 1: Two Sides Known   In the right triangle below, the right angle is at . All angles are measured in degrees.   A right triangle ABC with the right angle at C, leg AC of length 8, leg BC of length a, and hypotenuse AB of length 17.  Right triangle with vertex C at the lower left, vertex B at the lower right, and vertex A directly above C. The vertical leg from C to A has length 8. The horizontal leg from C to B is labeled a. The hypotenuse from A to B has length 17. A small square at C marks the right angle.          A  B  C  8  a  17         Find the value of .    By the Pythagorean Theorem,       Find the exact values of , , , , , and .    From angle , the opposite side is , the adjacent side is , and the hypotenuse is . From angle , the opposite side is and the adjacent side is .  , , , , , and .      Find the angles and in degrees. Round to two decimal places.    . Since the angles of a triangle add to and , . As a check, .           Problem 2: One Angle and One Side Known   In the right triangle below, the right angle is at , angle measures , and side has length .   A right triangle with a 35 degree angle at A, adjacent leg 12, opposite leg y, and hypotenuse z.  Right triangle with vertex C at the lower left, vertex A at the lower right, and vertex B directly above C. The horizontal leg from C to A has length 12. The vertical leg from C to B is labeled y. The hypotenuse from A to B is labeled z. The angle at A is 35 degrees, and a small square at C marks the right angle.          A  B  C  35^\\circ  12  y  z         Find the angle .    .      Find . Give the exact value using a trig function, then round to two decimal places.    From angle , is opposite and is adjacent, so . Then .      Find . Give the exact value using a trig function, then round to two decimal places.    From angle , is adjacent and is the hypotenuse, so . Then . As a check, and .           Problem 3: Sides in Terms of a Variable   The legs of a right triangle have lengths and , and the hypotenuse has length .   A right triangle with legs x and x plus 7 and hypotenuse 13.  Right triangle with the right angle at the lower left. The vertical leg is labeled x, the horizontal leg is labeled x plus 7, and the hypotenuse is labeled 13. The angle at the lower right vertex is labeled theta.          x  x + 7  13  \\theta         Find .    By the Pythagorean Theorem,   So or . A side length cannot be negative, so , and the legs are and .      Find , , and in degrees.    The side opposite is and the adjacent side is , so and . Then .           Problem 4: An Unknown Hypotenuse   A right triangle has a hypotenuse of length and an angle of .   A right triangle with hypotenuse x and a 40 degree angle.  Right triangle with the right angle at the lower left. The angle at the lower right vertex is 40 degrees. The hypotenuse is labeled x. The legs are not labeled.          40^\\circ  x         Write the lengths of both legs in terms of .    The leg opposite the angle is , since . The leg adjacent to it is .      The perimeter of the triangle is . Find .    Add the three sides and factor out .            Problem 5: A Ladder   Problems 5, 7, and 8 do not include a picture. Draw one before you start.  Ladder safety guidelines recommend setting up an extension ladder at an angle of about with the ground. A -foot ladder leans against a house at this angle.     How high up the house does the ladder reach?    The ladder is the hypotenuse and the height is opposite the angle, so . Then feet.      How far from the house should the base of the ladder be placed?    The distance is adjacent to the angle, so it is feet. This matches the rule of thumb of about foot out for every feet up.           Problem 6: Two Angles of Elevation   From point , the angle of elevation to the top of a building is . After walking feet straight toward the building to point , the angle of elevation is . Let be the height of the building and the distance from to the building.   Two sight lines from points P and Q on the ground to the top of a building of height h.  A vertical building of height h stands at the right. Point P is on the ground at the left, and point Q is 50 feet closer to the building. The distance from Q to the building is d. A line from P to the top of the building makes a 40 degree angle with the ground, and a line from Q to the top makes a 55 degree angle.           P  Q  40^\\circ  55^\\circ  50  d  h         Write two equations involving and , one for each right triangle.    From , , so . From , the horizontal distance is , so .      Solve for , then find the height of the building.    Set the two expressions for equal.   Then feet.           Problem 7: Watching a Launch   A camera is set up on level ground miles from a rocket's launch pad. The rocket rises straight up.     What is the angle of elevation from the camera to the rocket when the rocket is miles high?    The height is opposite the angle and the distance is adjacent, so and .      How far is the rocket from the camera at that moment?    By the Pythagorean Theorem, the distance is miles.           Problem 8: A Wheelchair Ramp   The Americans with Disabilities Act (ADA) requires that a wheelchair ramp rise no more than inch for every inches of horizontal distance. A ramp is being built to the front door of a building, which is inches above the sidewalk.     What is the steepest angle a ramp can make with the ground and still meet this rule?    The rise is opposite the angle and the horizontal distance is adjacent, so and .      At this steepest angle, how much horizontal distance does the ramp need? How long is the ramp itself?    The horizontal distance is inches, or feet. The ramp is the hypotenuse, so its length is inches, a little more than feet. Using trig instead, the length is inches.      "
},
{
  "id": "lt11-right-triangles-2",
  "level": "2",
  "url": "lt11-right-triangles.html#lt11-right-triangles-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  Given a right triangle with partial information about its sides and angles, I can determine the missing information for the remaining sides and angles, even if the quantities involve an unknown variable.   "
},
{
  "id": "lt11-tri-two-sides",
  "level": "2",
  "url": "lt11-right-triangles.html#lt11-tri-two-sides",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Problem 1: Two Sides Known.",
  "body": " Problem 1: Two Sides Known   In the right triangle below, the right angle is at . All angles are measured in degrees.   A right triangle ABC with the right angle at C, leg AC of length 8, leg BC of length a, and hypotenuse AB of length 17.  Right triangle with vertex C at the lower left, vertex B at the lower right, and vertex A directly above C. The vertical leg from C to A has length 8. The horizontal leg from C to B is labeled a. The hypotenuse from A to B has length 17. A small square at C marks the right angle.          A  B  C  8  a  17         Find the value of .    By the Pythagorean Theorem,       Find the exact values of , , , , , and .    From angle , the opposite side is , the adjacent side is , and the hypotenuse is . From angle , the opposite side is and the adjacent side is .  , , , , , and .      Find the angles and in degrees. Round to two decimal places.    . Since the angles of a triangle add to and , . As a check, .    "
},
{
  "id": "lt11-tri-angle-side",
  "level": "2",
  "url": "lt11-right-triangles.html#lt11-tri-angle-side",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Problem 2: One Angle and One Side Known.",
  "body": " Problem 2: One Angle and One Side Known   In the right triangle below, the right angle is at , angle measures , and side has length .   A right triangle with a 35 degree angle at A, adjacent leg 12, opposite leg y, and hypotenuse z.  Right triangle with vertex C at the lower left, vertex A at the lower right, and vertex B directly above C. The horizontal leg from C to A has length 12. The vertical leg from C to B is labeled y. The hypotenuse from A to B is labeled z. The angle at A is 35 degrees, and a small square at C marks the right angle.          A  B  C  35^\\circ  12  y  z         Find the angle .    .      Find . Give the exact value using a trig function, then round to two decimal places.    From angle , is opposite and is adjacent, so . Then .      Find . Give the exact value using a trig function, then round to two decimal places.    From angle , is adjacent and is the hypotenuse, so . Then . As a check, and .    "
},
{
  "id": "lt11-tri-variable-sides",
  "level": "2",
  "url": "lt11-right-triangles.html#lt11-tri-variable-sides",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Problem 3: Sides in Terms of a Variable.",
  "body": " Problem 3: Sides in Terms of a Variable   The legs of a right triangle have lengths and , and the hypotenuse has length .   A right triangle with legs x and x plus 7 and hypotenuse 13.  Right triangle with the right angle at the lower left. The vertical leg is labeled x, the horizontal leg is labeled x plus 7, and the hypotenuse is labeled 13. The angle at the lower right vertex is labeled theta.          x  x + 7  13  \\theta         Find .    By the Pythagorean Theorem,   So or . A side length cannot be negative, so , and the legs are and .      Find , , and in degrees.    The side opposite is and the adjacent side is , so and . Then .    "
},
{
  "id": "lt11-tri-variable-hyp",
  "level": "2",
  "url": "lt11-right-triangles.html#lt11-tri-variable-hyp",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Problem 4: An Unknown Hypotenuse.",
  "body": " Problem 4: An Unknown Hypotenuse   A right triangle has a hypotenuse of length and an angle of .   A right triangle with hypotenuse x and a 40 degree angle.  Right triangle with the right angle at the lower left. The angle at the lower right vertex is 40 degrees. The hypotenuse is labeled x. The legs are not labeled.          40^\\circ  x         Write the lengths of both legs in terms of .    The leg opposite the angle is , since . The leg adjacent to it is .      The perimeter of the triangle is . Find .    Add the three sides and factor out .     "
},
{
  "id": "lt11-tri-ladder",
  "level": "2",
  "url": "lt11-right-triangles.html#lt11-tri-ladder",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Problem 5: A Ladder.",
  "body": " Problem 5: A Ladder   Problems 5, 7, and 8 do not include a picture. Draw one before you start.  Ladder safety guidelines recommend setting up an extension ladder at an angle of about with the ground. A -foot ladder leans against a house at this angle.     How high up the house does the ladder reach?    The ladder is the hypotenuse and the height is opposite the angle, so . Then feet.      How far from the house should the base of the ladder be placed?    The distance is adjacent to the angle, so it is feet. This matches the rule of thumb of about foot out for every feet up.    "
},
{
  "id": "lt11-tri-two-angles",
  "level": "2",
  "url": "lt11-right-triangles.html#lt11-tri-two-angles",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Problem 6: Two Angles of Elevation.",
  "body": " Problem 6: Two Angles of Elevation   From point , the angle of elevation to the top of a building is . After walking feet straight toward the building to point , the angle of elevation is . Let be the height of the building and the distance from to the building.   Two sight lines from points P and Q on the ground to the top of a building of height h.  A vertical building of height h stands at the right. Point P is on the ground at the left, and point Q is 50 feet closer to the building. The distance from Q to the building is d. A line from P to the top of the building makes a 40 degree angle with the ground, and a line from Q to the top makes a 55 degree angle.           P  Q  40^\\circ  55^\\circ  50  d  h         Write two equations involving and , one for each right triangle.    From , , so . From , the horizontal distance is , so .      Solve for , then find the height of the building.    Set the two expressions for equal.   Then feet.    "
},
{
  "id": "lt11-tri-rocket",
  "level": "2",
  "url": "lt11-right-triangles.html#lt11-tri-rocket",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "Problem 7: Watching a Launch.",
  "body": " Problem 7: Watching a Launch   A camera is set up on level ground miles from a rocket's launch pad. The rocket rises straight up.     What is the angle of elevation from the camera to the rocket when the rocket is miles high?    The height is opposite the angle and the distance is adjacent, so and .      How far is the rocket from the camera at that moment?    By the Pythagorean Theorem, the distance is miles.    "
},
{
  "id": "lt11-tri-ramp",
  "level": "2",
  "url": "lt11-right-triangles.html#lt11-tri-ramp",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "Problem 8: A Wheelchair Ramp.",
  "body": " Problem 8: A Wheelchair Ramp   The Americans with Disabilities Act (ADA) requires that a wheelchair ramp rise no more than inch for every inches of horizontal distance. A ramp is being built to the front door of a building, which is inches above the sidewalk.     What is the steepest angle a ramp can make with the ground and still meet this rule?    The rise is opposite the angle and the horizontal distance is adjacent, so and .      At this steepest angle, how much horizontal distance does the ramp need? How long is the ramp itself?    The horizontal distance is inches, or feet. The ramp is the hypotenuse, so its length is inches, a little more than feet. Using trig instead, the length is inches.    "
},
{
  "id": "lt12-polynomials",
  "level": "1",
  "url": "lt12-polynomials.html",
  "type": "Worksheet",
  "number": "",
  "title": "Learning Target 12: Polynomial Functions",
  "body": " Learning Target 12: Polynomial Functions    I can identify the degree, zeros, turning points, and long-range behavior of a polynomial given its formula or graph, and I can find the formula of a polynomial that fits given data about its behavior.         Problem 1: Degree and Leading Coefficient   For each function, decide whether it is a polynomial. If it is, state its degree and leading coefficient.        This is a polynomial. The highest power is , so the degree is and the leading coefficient is . The terms do not have to be written in order.         Not a polynomial. Since , one term has a fractional power.         Not a polynomial. Since , one term has a negative power.         This is a polynomial. Coefficients like and are allowed, since only the powers of must be whole numbers. The degree is and the leading coefficient is .           Problem 2: Zeros and Turning Points   A polynomial of degree has at most real zeros and at most turning points.     A polynomial has degree . What is the maximum number of real zeros it can have? What is the maximum number of turning points?    At most real zeros and at most turning points.      The graph of a polynomial has exactly turning points. What is the smallest possible degree?    A polynomial of degree has at most turning points, so we need . The smallest possible degree is .      Can a polynomial of degree have no real zeros? Explain using the long-range behavior.    No. For an odd-degree polynomial, the two ends of the graph go in opposite directions, one toward and one toward . A graph with no breaks that goes from below the -axis to above it must cross the axis at least once.           Problem 3: Reading a Factored Formula   Let .     List the zeros of and the multiplicity of each. At which zeros does the graph cross the -axis, and at which does it touch the axis and turn around?    The zeros are (multiplicity ), (multiplicity ), and (multiplicity ). The graph crosses the axis at and , and touches the axis and turns around at , since that zero has even multiplicity.      What are the degree and leading coefficient of ?    Add the multiplicities: , so the degree is . Multiplying the leading terms gives , so the leading coefficient is .      Find the -intercept.    , so the -intercept is .      Find and .    For large , behaves like . The degree is even and the leading coefficient is negative, so both ends point down: and .           Problem 4: Long-Range Behavior   For each polynomial, find and . Explain using the leading term.        The leading term is : odd degree, negative leading coefficient. So as , and as .         The leading term is : even degree, positive leading coefficient. So in both directions. The small coefficient does not matter for long-range behavior, since eventually outgrows .         Multiplying the leading terms gives : odd degree, positive leading coefficient. So as and as .           Problem 5: A Formula from a Graph   The graph of a polynomial is shown below. The dots mark the -intercepts and the -intercept .   The graph of a polynomial q crossing the x-axis at negative three and four, touching it at one, with y-intercept negative three.  The graph of q comes down from the upper left, crosses the x-axis at negative three, falls to a low point near negative two, negative thirteen point seven, rises through the y-intercept zero, negative three, and touches the x-axis at one without crossing. It falls again to a low point near three, negative six, then rises, crossing the x-axis at four and continuing up to the upper right.    q(x) = 0.25*(x + 3)*(x - 1)^2*(x - 4)         y = q(x)         List the zeros of . For each one, say whether the graph crosses or touches the -axis, and what that tells you about its multiplicity.    The graph crosses at and , so those zeros have odd multiplicity; the simplest choice is . It touches and turns around at , so that zero has even multiplicity; the simplest choice is .      How many turning points does the graph have? What is the minimum degree of ?    There are turning points, so the degree is at least . This agrees with the multiplicities: .      Find a formula for of minimum degree. Use the -intercept to find the leading coefficient, and check your answer in Desmos.    The zeros give . Use the point .   So .      Based on the graph, find and . Does this match your formula?    Both ends go up, so both limits are . This matches the formula: the degree is even and the leading coefficient is positive.           Problem 6: A Formula from Conditions   Find the polynomial of least degree that has   a zero of multiplicity at ,  a zero of multiplicity at , and  a -intercept of .      Find the formula for . What is its degree?    The zeros require the factors and , so , with degree . Use the -intercept.   So .      Describe the long-range behavior of .    The leading term is : odd degree, positive leading coefficient. So as and as .           Problem 7: Using a Point Other Than the Intercept   A polynomial of degree has zeros at and , and a zero at where the graph touches the -axis without crossing. The graph also passes through the point .     Find the formula for .    Touching the axis at means even multiplicity, and the total degree must be , so . Use the point .   So .      Compare to the polynomial from Problem 5. How are the graphs related, and how is the long-range behavior different?    They have the same zeros with the same multiplicities, so the graphs cross and touch the axis at the same places. Since , the graph of is the graph of flipped over the -axis and stretched vertically. Both ends of point down: as .      "
},
{
  "id": "lt12-polynomials-2",
  "level": "2",
  "url": "lt12-polynomials.html#lt12-polynomials-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  I can identify the degree, zeros, turning points, and long-range behavior of a polynomial given its formula or graph, and I can find the formula of a polynomial that fits given data about its behavior.   "
},
{
  "id": "lt12-poly-definition",
  "level": "2",
  "url": "lt12-polynomials.html#lt12-poly-definition",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Problem 1: Degree and Leading Coefficient.",
  "body": " Problem 1: Degree and Leading Coefficient   For each function, decide whether it is a polynomial. If it is, state its degree and leading coefficient.        This is a polynomial. The highest power is , so the degree is and the leading coefficient is . The terms do not have to be written in order.         Not a polynomial. Since , one term has a fractional power.         Not a polynomial. Since , one term has a negative power.         This is a polynomial. Coefficients like and are allowed, since only the powers of must be whole numbers. The degree is and the leading coefficient is .    "
},
{
  "id": "lt12-poly-counts",
  "level": "2",
  "url": "lt12-polynomials.html#lt12-poly-counts",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Problem 2: Zeros and Turning Points.",
  "body": " Problem 2: Zeros and Turning Points   A polynomial of degree has at most real zeros and at most turning points.     A polynomial has degree . What is the maximum number of real zeros it can have? What is the maximum number of turning points?    At most real zeros and at most turning points.      The graph of a polynomial has exactly turning points. What is the smallest possible degree?    A polynomial of degree has at most turning points, so we need . The smallest possible degree is .      Can a polynomial of degree have no real zeros? Explain using the long-range behavior.    No. For an odd-degree polynomial, the two ends of the graph go in opposite directions, one toward and one toward . A graph with no breaks that goes from below the -axis to above it must cross the axis at least once.    "
},
{
  "id": "lt12-poly-factored",
  "level": "2",
  "url": "lt12-polynomials.html#lt12-poly-factored",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Problem 3: Reading a Factored Formula.",
  "body": " Problem 3: Reading a Factored Formula   Let .     List the zeros of and the multiplicity of each. At which zeros does the graph cross the -axis, and at which does it touch the axis and turn around?    The zeros are (multiplicity ), (multiplicity ), and (multiplicity ). The graph crosses the axis at and , and touches the axis and turns around at , since that zero has even multiplicity.      What are the degree and leading coefficient of ?    Add the multiplicities: , so the degree is . Multiplying the leading terms gives , so the leading coefficient is .      Find the -intercept.    , so the -intercept is .      Find and .    For large , behaves like . The degree is even and the leading coefficient is negative, so both ends point down: and .    "
},
{
  "id": "lt12-poly-long-run",
  "level": "2",
  "url": "lt12-polynomials.html#lt12-poly-long-run",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Problem 4: Long-Range Behavior.",
  "body": " Problem 4: Long-Range Behavior   For each polynomial, find and . Explain using the leading term.        The leading term is : odd degree, negative leading coefficient. So as , and as .         The leading term is : even degree, positive leading coefficient. So in both directions. The small coefficient does not matter for long-range behavior, since eventually outgrows .         Multiplying the leading terms gives : odd degree, positive leading coefficient. So as and as .    "
},
{
  "id": "lt12-poly-graph",
  "level": "2",
  "url": "lt12-polynomials.html#lt12-poly-graph",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Problem 5: A Formula from a Graph.",
  "body": " Problem 5: A Formula from a Graph   The graph of a polynomial is shown below. The dots mark the -intercepts and the -intercept .   The graph of a polynomial q crossing the x-axis at negative three and four, touching it at one, with y-intercept negative three.  The graph of q comes down from the upper left, crosses the x-axis at negative three, falls to a low point near negative two, negative thirteen point seven, rises through the y-intercept zero, negative three, and touches the x-axis at one without crossing. It falls again to a low point near three, negative six, then rises, crossing the x-axis at four and continuing up to the upper right.    q(x) = 0.25*(x + 3)*(x - 1)^2*(x - 4)         y = q(x)         List the zeros of . For each one, say whether the graph crosses or touches the -axis, and what that tells you about its multiplicity.    The graph crosses at and , so those zeros have odd multiplicity; the simplest choice is . It touches and turns around at , so that zero has even multiplicity; the simplest choice is .      How many turning points does the graph have? What is the minimum degree of ?    There are turning points, so the degree is at least . This agrees with the multiplicities: .      Find a formula for of minimum degree. Use the -intercept to find the leading coefficient, and check your answer in Desmos.    The zeros give . Use the point .   So .      Based on the graph, find and . Does this match your formula?    Both ends go up, so both limits are . This matches the formula: the degree is even and the leading coefficient is positive.    "
},
{
  "id": "lt12-poly-conditions-1",
  "level": "2",
  "url": "lt12-polynomials.html#lt12-poly-conditions-1",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Problem 6: A Formula from Conditions.",
  "body": " Problem 6: A Formula from Conditions   Find the polynomial of least degree that has   a zero of multiplicity at ,  a zero of multiplicity at , and  a -intercept of .      Find the formula for . What is its degree?    The zeros require the factors and , so , with degree . Use the -intercept.   So .      Describe the long-range behavior of .    The leading term is : odd degree, positive leading coefficient. So as and as .    "
},
{
  "id": "lt12-poly-conditions-2",
  "level": "2",
  "url": "lt12-polynomials.html#lt12-poly-conditions-2",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "Problem 7: Using a Point Other Than the Intercept.",
  "body": " Problem 7: Using a Point Other Than the Intercept   A polynomial of degree has zeros at and , and a zero at where the graph touches the -axis without crossing. The graph also passes through the point .     Find the formula for .    Touching the axis at means even multiplicity, and the total degree must be , so . Use the point .   So .      Compare to the polynomial from Problem 5. How are the graphs related, and how is the long-range behavior different?    They have the same zeros with the same multiplicities, so the graphs cross and touch the axis at the same places. Since , the graph of is the graph of flipped over the -axis and stretched vertically. Both ends of point down: as .    "
},
{
  "id": "mth124-writing-assignment-1",
  "level": "1",
  "url": "mth124-writing-assignment-1.html",
  "type": "Worksheet",
  "number": "",
  "title": "Writing Assignment 1: Average Rate of Change",
  "body": " Writing Assignment 1: Average Rate of Change   This assignment covers Learning Target 2: I can find the average rate of change in a function on a given interval and state the units and interpret the meaning of the average rate of change in applied contexts.     Be as detailed as possible when writing up a solution, and show all of your work.  You may use any resource, but do not directly copy work that is not your own.  You may work with a partner, but it is not required. If you work with a partner, each of you should write at least two parts, and initial each part you write.   Every answer that asks for an explanation or interpretation should be written in complete sentences, in the context of your data.  Submit your final solutions on these pages.        Collecting Data   Find some data about a quantity that changes over time, and record enough entries to fill in the table below. Put your input (time) in the first row, and use the first column for your variable and function labels. If you want to include more values, or your numbers won't fit in the space given, feel free to attach your table separately.                             Your Data Source   Why did you choose this data set, and what was your source?     Defining Your Variables   Write a sentence that defines your input variable and your function.        Function Notation   Express the middle column of your table in function notation. Then write out in words what this notation means in the context of your data.     Average Rate of Change   Write the second and last columns of your data set as points. Then find the average rate of change (slope) between these two points.     Interpreting the Average Rate of Change   Explain what your average rate of change from the previous problem means in the context of your data. Remember to address all 5 key parts of an interpretation.     "
},
{
  "id": "wa1-124-data-table",
  "level": "2",
  "url": "mth124-writing-assignment-1.html#wa1-124-data-table",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Collecting Data.",
  "body": " Collecting Data   Find some data about a quantity that changes over time, and record enough entries to fill in the table below. Put your input (time) in the first row, and use the first column for your variable and function labels. If you want to include more values, or your numbers won't fit in the space given, feel free to attach your table separately.                           "
},
{
  "id": "wa1-124-data-source",
  "level": "2",
  "url": "mth124-writing-assignment-1.html#wa1-124-data-source",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Your Data Source.",
  "body": " Your Data Source   Why did you choose this data set, and what was your source?   "
},
{
  "id": "wa1-124-define-variables",
  "level": "2",
  "url": "mth124-writing-assignment-1.html#wa1-124-define-variables",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Defining Your Variables.",
  "body": " Defining Your Variables   Write a sentence that defines your input variable and your function.   "
},
{
  "id": "wa1-124-function-notation",
  "level": "2",
  "url": "mth124-writing-assignment-1.html#wa1-124-function-notation",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Function Notation.",
  "body": " Function Notation   Express the middle column of your table in function notation. Then write out in words what this notation means in the context of your data.   "
},
{
  "id": "wa1-124-aroc",
  "level": "2",
  "url": "mth124-writing-assignment-1.html#wa1-124-aroc",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Average Rate of Change.",
  "body": " Average Rate of Change   Write the second and last columns of your data set as points. Then find the average rate of change (slope) between these two points.   "
},
{
  "id": "wa1-124-interpret",
  "level": "2",
  "url": "mth124-writing-assignment-1.html#wa1-124-interpret",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Interpreting the Average Rate of Change.",
  "body": " Interpreting the Average Rate of Change   Explain what your average rate of change from the previous problem means in the context of your data. Remember to address all 5 key parts of an interpretation.   "
},
{
  "id": "mth124-writing-assignment-2",
  "level": "1",
  "url": "mth124-writing-assignment-2.html",
  "type": "Worksheet",
  "number": "",
  "title": "Writing Assignment 2: Difference Quotients, Linear Models, and Inverses",
  "body": " Writing Assignment 2: Difference Quotients, Linear Models, and Inverses   This assignment covers Learning Targets 3 through 5.    Be as detailed as possible when writing up a solution, and show all of your work.  You may use any resource, but do not directly copy work that is not your own.  You may work with a partner, but it is not required. If you work with a partner, each of you should write at least two parts, and initial each part you write.   Submit your final solutions on these pages, and upload a clean, high-quality scan of every page to Blackboard when you are done.  Each question includes a short video on the same topic if you would like a refresher.        The Difference Quotient    Video: the difference quotient       Find an expression for the average rate of change of on the interval . Simplify as much as possible.   Hint: The difference quotient formula is . Your last step should involve canceling an .       For what value of do we need to be careful, and why?         Filling a Gas Tank   Suppose you start filling a vehicle's gas tank with gasoline. After seconds the tank has gallons, and after minute the tank has gallons. Assume the fill rate is constant.    Video: building a linear model       Find a linear model for , the volume in gallons in the tank after  minutes .      What does the slope mean in the context of this problem?      How much gas was in the tank before you started filling it?      Assuming the tank holds gallons, how long does it take to fill the tank from when you started?         Finding an Inverse   Find the inverse of the function . Show all algebraic steps clearly.   Video: finding the inverse of a function       "
},
{
  "id": "wa2-124-difference-quotient",
  "level": "2",
  "url": "mth124-writing-assignment-2.html#wa2-124-difference-quotient",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "The Difference Quotient.",
  "body": " The Difference Quotient    Video: the difference quotient       Find an expression for the average rate of change of on the interval . Simplify as much as possible.   Hint: The difference quotient formula is . Your last step should involve canceling an .       For what value of do we need to be careful, and why?    "
},
{
  "id": "wa2-124-gas-tank",
  "level": "2",
  "url": "mth124-writing-assignment-2.html#wa2-124-gas-tank",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Filling a Gas Tank.",
  "body": " Filling a Gas Tank   Suppose you start filling a vehicle's gas tank with gasoline. After seconds the tank has gallons, and after minute the tank has gallons. Assume the fill rate is constant.    Video: building a linear model       Find a linear model for , the volume in gallons in the tank after  minutes .      What does the slope mean in the context of this problem?      How much gas was in the tank before you started filling it?      Assuming the tank holds gallons, how long does it take to fill the tank from when you started?    "
},
{
  "id": "wa2-124-inverse",
  "level": "2",
  "url": "mth124-writing-assignment-2.html#wa2-124-inverse",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Finding an Inverse.",
  "body": " Finding an Inverse   Find the inverse of the function . Show all algebraic steps clearly.   Video: finding the inverse of a function     "
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
