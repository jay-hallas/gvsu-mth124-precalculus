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
  "body": " Activity: Average Rate of Change    Average Rate of Change  The average rate of change of a function from to is the change in output divided by the change in input. Three things to keep in mind. Only the two endpoints matter, no matter what happens in between. The units are always output units per input unit. A negative answer means the output decreased across the interval, not that the function was negative.    Rate of Change from a Formula   Worked Example   Find the average rate of change of on the interval .    Evaluate at both endpoints first, then divide.   The average rate of change is . On average, the output drops by units for each unit increase in the input across this interval.       Find the average rate of change of on the interval .       and , so the average rate of change is .      Find the average rate of change of on the interval .        and , so   Watch the denominator here; students often write instead of .      Find the average rate of change of on the interval .       and , so .       Rate of Change from a Table   Worked Example   A new app is gaining subscribers. The total number of subscribers after weeks is given below. Find the average rate of change from to and interpret it.    (weeks)         (subscribers)           Read the two endpoint columns, and . Then   The average rate of change is subscribers per week. Between week and week , the app gained an average of new subscribers each week. The columns at and never entered the computation.    Questions 4 and 5 both refer to the following table. A large tank is being drained, and is the amount of water left in the tank after minutes.     (minutes)         (gallons)             Consider the interval from to .     Determine the average rate of change of the water amount on this interval, and state its units.    gal\/min    gallons per minute.      Describe the meaning of your result in the context of the question. Write a full sentence that does not use the letters or .    Between and minutes after draining began, the tank lost an average of gallons of water each minute.       Now consider the interval from to .     Determine the average rate of change of the water amount on this interval.    gal\/min    gallons per minute.      Compare your answer to the one from Question 4. During which stretch of time was the tank draining faster? Explain how you can tell from the two numbers.    The tank drained faster over the first ten minutes. It was losing gallons per minute there compared with gallons per minute on the later interval. Both are negative, so the comparison is about which is farther from zero, not which is larger as a signed number. This is a good place to point out that the average rate of change depends on the interval you choose.        Rate of Change from a Graph   Worked Example   The graph of is shown below. Find the average rate of change of from to .   A downward-opening parabola with a dashed line segment joining two points on it.   A downward-opening parabola is drawn on a coordinate grid from x equals negative three to x equals three, with its highest point at zero, two. It crosses the horizontal axis at negative two, zero and two, zero. The points zero, two and two, zero are marked, and a dashed line segment connects them.     h(x) = -0.5*x^2 + 2              Read the outputs off the graph: and . Then   The average rate of change is . Notice that this is exactly the slope of the dashed line drawn through the two points on the curve, which is what the average rate of change measures.       The graph of is shown below.   An upward-opening parabola with three marked points.   An upward-opening parabola is drawn on a coordinate grid from x equals negative three to x equals three, with its lowest point at zero, negative two. The points negative two, zero; zero, negative two; and two, zero are marked on the curve.     f(x) = 0.5*x^2 - 2               Find the average rate of change of from to .       and , so .      Find the average rate of change of from to .       and , so .      Your two answers have opposite signs even though the graph is one smooth curve. Explain what each sign is telling you about the outputs on that interval.    The negative answer says the outputs decreased on the way from to ; the positive answer says they increased from to . The curve turns around at the bottom, so the sign of the average rate of change flips depending on which side of the low point you are on.        Rate of Change in Context   Worked Example   Suppose is the height in feet of an object dropped from a building after seconds. Find the average rate of change of on and describe what it means.    Evaluate at both endpoints. Then   The average rate of change is feet per second. During the first seconds of the fall, the object drops an average of feet each second, so its average velocity over that stretch is feet per second downward.       Suppose is the height in feet of an object dropped from a building after seconds.     Find the average rate of change of on , and state its units.    ft\/s     and , so feet per second.      Describe in words what your answer to part (a) means. Your sentence should mention the object, the time, and the direction it is moving.    Between and seconds after the object was dropped, its height decreased by an average of feet each second, meaning it was moving downward.       A delivery van is purchased new, and its value in dollars after years is given by .     Find the average rate of change of on , and state its units.    dollars\/yr     and , so dollars per year.      Find the average rate of change of on .    dollars\/yr     and , so dollars per year.      You should have gotten the same answer twice. What is it about this particular function that makes the average rate of change come out the same on every interval?    is a linear function, and its slope is . For a line, the average rate of change between any two points is just the slope, so the interval does not matter. For every other function type in this activity, it does.      "
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
  "title": "Learning Target: Function Notation",
  "body": " Learning Target: Function Notation    I can use function notation, find and simplify the output of a function given an input, and find an input that produces a given output; I can do this for functions given by a formula, a table, and a graph.      Problem 1: A Function Given by a Formula   Let .     Find .     .      Find . Show each step of your simplification.     .  The negative input has to be wrapped in parentheses before multiplying, and the denominator has to be finished off before dividing.      Find the input that produces an output of .    We are solving . Multiplying both sides by gives , so and .  The input is .      Is there an input value that this function cannot accept? If so, state it and explain what goes wrong there.    The input has to be excluded. It makes the denominator equal to zero, and division by zero is undefined.        Problem 2: A Function Given by a Table   The function is defined by the table below.                         Find and .     and .      Find all inputs for which .     and . Two different inputs are allowed to share an output, so both count.      Find all inputs for which . Then explain how this question is different from finding .     .  To find , you start in the input row at and read the output underneath it. To solve , you start in the output row at and read back every input above it.  The two questions move through the table in opposite directions, and they happen to have different answers here.      A different rule is recorded in the table below. Can this rule be a function? Why or why not?                    No. The input is assigned two different outputs, and , and a function has to assign exactly one output to each input.  The repeated output is not a problem. Nothing in the definition says two inputs cannot share an output.        Problem 3: A Function Given by a Graph   The function is defined by the graph below.   A graph made of three line segments with corners at the points negative two, negative two and two, two.   The graph consists of three connected line segments drawn on a coordinate grid. The first segment falls from the point negative four, two to the point negative two, negative two. The second segment rises from negative two, negative two to the point two, two. The third segment falls from two, two to the point four, zero. The graph crosses the horizontal axis at negative three, at the origin, and at four.                     Find and .     and .      Find all inputs for which .     , , and . These are the three places where the graph meets the horizontal axis.      Find all inputs for which .     and . One is the left endpoint of the graph and the other is the peak in the middle.      Sketch a graph that is not a function, assuming the horizontal axis holds inputs and the vertical axis holds outputs. Mark one input on your sketch that shows why it fails.    Any graph where some vertical line hits the curve more than once will work.  A circle centered at the origin is one example. The input is paired with two outputs, one at the top of the circle and one at the bottom, so the rule does not assign exactly one output to that input.        Problem 4: Function Notation in Context   A driver leaves Grand Rapids for a trip downstate. The distance still remaining in the trip, , measured in miles, is a function of the time , measured in hours since the driver left. Write .     Identify the input and output variables, and state the units of each.    The input is the time since the driver left, measured in hours. The output is the distance remaining, measured in miles.      Explain in writing what means in this situation.    Three hours after the driver left, there are still 145 miles left in the trip.  A complete interpretation names the input value, the output value, and the units on each, without using the letters or .      Explain what the equation is asking, and describe what a solution to it would tell you about the trip. How is this different from the previous question?    It asks for the time at which the distance remaining is zero miles, so a solution is the number of hours the whole trip took.  In the previous question the input was handed to us and we reported the output. Here the output is handed to us and we solve backwards for the input.      Suppose you divide the change in by the change in over the first three hours. What units does that value carry, and what does it tell you about the drive?    The units are miles per hour. It is the average rate at which the distance remaining is changing, which is the driver's average speed over those three hours.  The value comes out negative, since the distance remaining is going down as time goes up.        Problem 5: Inputs That Are Not Numbers   Let .     Find .     .      Find and simplify completely. Substitute the entire expression everywhere an appears.     .  The common error here is writing for .      Find and simplify. Compare your result to the previous answer and explain what the comparison shows about function notation.    Since , we get .  This is not the same as . The notation means the function is applied to the single input ; it does not mean the output at and the output at get added together.  Function notation does not distribute across a sum.      "
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
  "title": "Learning Target: Average Rate of Change",
  "body": " Learning Target: Average Rate of Change    I can find the average rate of change in a function on a given interval and state the units and interpret the meaning of the average rate of change in applied contexts.      Problem 1: Functions Given by a Formula   Find the average rate of change of each function on the given interval. Show the endpoint outputs before you divide.     Find the average rate of change of on the interval .    Evaluate at the endpoints, then divide.   The average rate of change is . The output drops by an average of units for each unit increase in the input across this interval.      Find the average rate of change of on the interval .    Evaluate at the endpoints, watching the signs on the negative input.   The average rate of change is .      Find the average rate of change of on the interval .    Evaluate at the endpoints, then divide.   The average rate of change is .        Problem 2: A Function Given by a Table   A sugarbush collects maple sap during a run in early spring. Let be the total number of gallons of sap collected hours after tapping began.    (hours)         (gallons)            Find the average rate of change of on the interval , and state its units.    Read the two endpoint columns, and .   The average rate of change is gallons per hour. The column at never entered the computation.      Describe the meaning of your answer in the context of this situation. Write a full sentence that does not use the letters or .    Between and hours after tapping began, the sugarbush collected an average of gallons of sap each hour.      Find the average rate of change of on the interval . Was the sap running faster during this stretch or during the earlier one? Explain how you can tell.    Using and :   The sap ran faster during the later stretch, gallons per hour compared with gallons per hour earlier. Both rates are positive, so the larger number is the faster one here.        Problem 3: A Function Given by a Graph   The function is defined by the graph below.   A graph made of three line segments that falls, then runs flat, then rises.   The graph consists of three connected line segments drawn on a coordinate grid. The first segment falls from the point negative four, three to the point negative one, negative three. The second segment is horizontal, running from negative one, negative three to the point one, negative three. The third segment rises from one, negative three to the point four, three.                     Find the average rate of change of on the interval .    Reading the graph, and .   The average rate of change is .      Find the average rate of change of on the interval .    Reading the graph, and .   The average rate of change is .      Find the average rate of change of on the interval . Explain what your answer says about the outputs at the two endpoints, and why it does not mean the function was flat across the whole interval.    Reading the graph, and .   An average rate of change of means the output ended up at the same height it started at. It says nothing about what happened in between; the graph dropped all the way down to and climbed back. Only the two endpoints go into the computation.        Problem 4: Average Rate of Change in Context   A ball is thrown straight up from the ground. Its height in feet after seconds is given by .     Find the average rate of change of on , and state its units.    Evaluate at the endpoints.   The average rate of change is feet per second.      Describe in words what your answer means. Your sentence should mention the ball, the time, and the direction it is moving.    During the first second after the throw, the ball rose an average of feet each second, so its average velocity over that stretch was feet per second upward.      Find the average rate of change of on . Explain what the sign of this answer tells you, and how the ball's motion on this interval differs from its motion on .    Evaluate at the endpoints.   The average rate of change is feet per second. The negative sign says the height decreased across this interval, so the ball was falling here while it was rising on . It has passed the top of its flight and is on its way back to the ground.        Problem 5: Working Backwards from a Rate   A candle is lit and burns steadily. Let be the height of the candle in centimeters, minutes after it was lit. The average rate of change of on the interval is .     What are the units of this average rate of change?    Centimeters per minute. The units are always the output units divided by the input units.      Interpret the meaning of in this context. Write a full sentence that does not use the letters or .    Between and minutes after the candle was lit, its height dropped by an average of centimeters each minute.      How much shorter was the candle at minutes than it was at minutes? Explain how you got your answer from the rate.    The interval is minutes long, and the candle lost centimeters per minute on average, so the total change in height was centimeters.  The candle was centimeters shorter at minutes than at minutes. This reverses the usual computation: instead of dividing the change in output by the change in input, we multiplied the rate by the length of the interval to recover the change in output.      "
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
  "title": "Learning Target: Linear Functions",
  "body": " Learning Target: Linear Functions    I can find an equation for any linear function in point-slope and slope-intercept form, given appropriate data or information.      Problem 1: A Line Through Two Points   Find an equation of the line through each pair of points. Give your answer in point-slope form and in slope-intercept form.     The line through and .    Find the slope first.   Using the point , the point-slope form is . The point is the -intercept, so the slope-intercept form is . Using in point-slope form, , is also correct.      The line through and .    Find the slope, then substitute a point.   The point-slope form is and the slope-intercept form is . As a check, .      The line through and .    Find the slope, then substitute a point, watching the signs.   The point-slope form is and the slope-intercept form is . As a check, .        Problem 2: Lines from Other Information   Find an equation of each line in point-slope form and in slope-intercept form.     The line with slope that passes through the point .    The slope and a point go straight into point-slope form.   The point-slope form is and the slope-intercept form is .      The line parallel to that passes through the point .    Solve the given equation for to read off its slope.   Parallel lines have the same slope, so the new line has slope .   The point-slope form is and the slope-intercept form is .      The line that has the same -intercept as and passes through the point .    From the previous part, is the same line as , so its -intercept is . The new line passes through and .   The slope-intercept form is . Using the point , the point-slope form is .        Problem 3: Lines Given by a Table and a Graph   The function is defined by the table below.                  The function is defined by the graph below.   A straight line falling from left to right with two marked points.   A straight line is drawn on a coordinate grid. It falls from left to right and passes through the marked points negative two, four and two, negative two. It crosses the vertical axis at the point zero, one.                 Show that the table could come from a linear function by computing the rate of change between each pair of consecutive columns.    Compute the change in output over the change in input for each pair of neighboring columns.   The rate of change is every time, which is what we expect from a linear function. Notice the inputs are not evenly spaced, so comparing the changes in output alone would not be enough.      Find an equation for in point-slope form and in slope-intercept form.    The slope is . Using the point :   The point-slope form is and the slope-intercept form is . As a check, .      Find an equation for in point-slope form and in slope-intercept form.    Reading the graph, the line passes through and .   The point-slope form is and the slope-intercept form is . The graph crosses the vertical axis at , which agrees with the intercept.        Problem 4: Interpreting a Linear Model   Terry is skiing down a steep hill. Terry's elevation in feet, seconds after starting, is given by , where can be any number from to .     Explain what and mean in this context. Write full sentences that do not use the letters or , and include units.    Terry started the run at an elevation of feet. Terry's elevation dropped by feet every second, so Terry was descending at a rate of feet per second.      Dana skis a different run. Dana's elevation is feet after seconds and feet after seconds. Assuming Dana's elevation changes at a constant rate, find a formula for Dana's elevation in slope-intercept form.    The data give the points and .   Dana's elevation is feet.      Who is descending faster, Terry or Dana? Who started at a higher elevation? Explain how you can tell from the two formulas.    Terry is descending faster. The slopes tell us Terry drops feet each second while Dana drops only feet each second. Terry also started higher; the constant terms show Terry began at feet and Dana began at feet.        Problem 5: Building a Linear Model   Let be the value of a car in dollars, years after it is purchased. The value of the car changes at a constant rate. The car is worth five years after purchase and ten years after purchase.     Find a formula for in slope-intercept form. State the units of the slope.    The data give the points and .   The model is . The slope is dollars per year, so the car loses in value each year.      What was the value of the car when it was purchased?    At purchase, , and . The car was worth when it was bought.      When will the car have no value left?    Set the value equal to zero and solve.   The car will have no value years after it is purchased.      Based on your answer to the previous part, what is a reasonable domain for this model? Explain.    A reasonable domain is . The model starts when the car is purchased, and after years it would give negative values, which make no sense for the value of a car.      "
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
  "title": "Learning Target: Composition of Functions",
  "body": " Learning Target: Composition of Functions    I can find and simplify values of the composition of two functions; I can do this for functions given by a formula, a table, and a graph.      Problem 1: Functions Given by a Table   The functions and are defined by the table below. Find each value if it exists. If a value does not exist, briefly explain why.                                     Work from the inside out. From the table, , so .         From the table, , so .         From the table, , so .         From the table, , so . The input does not appear in the table, so we have no value for . The value does not exist.         From the table, , so .        Problem 2: Functions Given by a Formula   Let and .     Find and simplify .    Substitute the whole expression for the input of , then expand.   Note that is not ; the middle term comes from multiplying out completely.      Find and simplify .    Substitute the whole expression for the input of .       Find and . What do your answers tell you about the order of composition?    Work from the inside out for each one.   We get and . The two answers are different, so the order matters; and are usually different functions. As a check, the formula from the first part gives .        Problem 3: Functions Given by a Graph   The graph of is shown on the left and the graph of is shown on the right.    The graph of f, made of three line segments that rise, run flat, then fall.   The graph of f consists of three connected line segments. The first segment rises from the point negative four, negative three to the point negative one, three. The second segment is horizontal, running from negative one, three to the point two, three. The third segment falls from two, three to the point four, negative one.                   The graph of g, a peak shape made of two line segments.   The graph of g consists of two connected line segments. The first segment rises from the point negative four, negative two to the point zero, two. The second segment falls from zero, two to the point four, negative two.                    Find .    Reading the graph of , . Reading the graph of , . So .      Find .    Reading the graph of , . Reading the graph of , . So .      Find .    Both steps use the graph of . First , and then . So .      Find and . Explain which graph you read first for each one.    For , the inside function is , so read the graph of first: , and then . So .  For , the inside function is , so read the graph of first: , and then . So .        Problem 4: Mixing a Formula and a Table   Let , and let be the function defined by the table below. Find each value if it exists. If a value does not exist, briefly explain why.                            Use the formula first: . Then use the table: . So .         Use the table first: . Then use the formula: . So .         Use the table first: . Then use the formula: . So .         Use the formula first: . That makes the outer value , but is not an input in the table. The value does not exist.        Problem 5: Composition in Context   Let be the number of miles traveled hours after starting a trip, and let be the function that converts miles to kilometers. Define a new function by .     What are the input and the output of ? Include units.    The input of is the input of , time in hours. The output of is the output of , distance in kilometers.      Write a full sentence explaining what represents.    The value is the number of kilometers traveled hours after the trip started. The function turns the time into miles, and then turns those miles into kilometers.      Suppose the car travels at a steady speed, so that . Find and simplify a formula for . Then find and explain what it means.    Substitute for the input of .   Two hours after the trip started, the car had traveled kilometers.      Explain why does not make sense in this situation.    The output of is a distance in kilometers, but the input of must be a time in hours. The output of the inside function does not match the kind of input the outside function expects, so the composition has no meaning here.      "
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
