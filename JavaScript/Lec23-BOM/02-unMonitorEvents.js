// unmonitorEvents()

// Purpose:
// Stops monitoring events started by monitorEvents().

// Syntax:
unmonitorEvents(target)

// Example:
unmonitorEvents(document);

// After running this command, events will no longer
// appear in the Console.


// Important


// These functions return undefined because their job
// is to start or stop monitoring, not return data.

// Therefore, write:

monitorEvents(document);

// instead of:

console.log(monitorEvents(document));

// and write:

unmonitorEvents(document);

// instead of:

console.log(unmonitorEvents(document));