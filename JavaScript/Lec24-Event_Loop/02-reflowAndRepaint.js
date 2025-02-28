//  Reflow:->

//  It is process of calculating the positions and geometrices of elements in the document
//  (DOM) , for the purpose of re-rendering part or all of the document. 

//           OR
//  Reflow is the process of recalculating the position, size, and geometry of elements in the DOM whenever the layout changes.

//  Note:->
//  We can say that  while we update elemets in the DOM then due to this if updation of the will effects the size, position, or layout of  elements.
//   then Reflow happens .



//  Repaint:->

//  It show or display pixel by pixel of elements .It is faster than reflow.

// Note:=>  
//   Repaint happens when visual properties (color, shadow, visibility, background, etc.) change but the layout (position/size) remains the same.


//  🚀 Optimizing to reduce reflows makes web performance better!
//   we should know about Document Fragment.

//  Note:-> 

//  When Reflow and Repaint is high then code optimization become low whereas reflow /repaint
//   also become low and Code is faster


//  When Reflow & Repaint are high, the browser does more work to update the page, making it slower.
//  When Reflow & Repaint are low, the browser updates efficiently, making the code faster.