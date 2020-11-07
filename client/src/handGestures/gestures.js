// WE ARE CREATING EACH GESTURE IN THIS FILE BY FINGER POSITION

import * as fp from 'fingerpose'


// -----------------------------------------------------------------------------------------------------------------------
// POINT DOWN
// -----------------------------------------------------------------------------------------------------------------------
const pointDownGesture = new fp.GestureDescription('point_down');
// Index finger
pointDownGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
pointDownGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 0.7);
pointDownGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalDownLeft, 0.7);
pointDownGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalDownRight, 0.7);

// All other fingers
pointDownGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
pointDownGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
pointDownGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
pointDownGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

// -----------------------------------------------------------------------------------------------------------------------
// POINT LEFT
// -----------------------------------------------------------------------------------------------------------------------
const pointLeftGesture = new fp.GestureDescription('point_left');
// Index finger
pointLeftGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
pointLeftGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);

// All other fingers
pointLeftGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
pointLeftGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
pointLeftGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
pointLeftGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);


// -----------------------------------------------------------------------------------------------------------------------
// POINT RIGHT
// -----------------------------------------------------------------------------------------------------------------------
const pointRightGesture = new fp.GestureDescription('point_right');
// Index finger
pointRightGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
pointRightGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0);

// All other fingers
pointRightGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
pointRightGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
pointRightGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
pointRightGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);


// -----------------------------------------------------------------------------------------------------------------------
// POINT UP
// -----------------------------------------------------------------------------------------------------------------------
const pointUpGesture = new fp.GestureDescription('point_up');
// Index finger
pointUpGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
pointUpGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.7);
pointUpGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.7);
pointUpGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.7);

// All other fingers
pointUpGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
pointUpGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
pointUpGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
pointUpGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

export {pointDownGesture, pointLeftGesture, pointRightGesture, pointUpGesture}