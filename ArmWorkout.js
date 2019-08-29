import PoseConfig from './PoseConfig.js';

// bicep curl calculator
export function bicepCalculator(currentState, configuration) {
	let currentDistance = configuration.distanceCalc(
		configuration.rightWrist,
		configuration.rightShoulder);
	if (currentState == 0) {
		if (currentDistance < (.5 * configuration.armLength)) {
			return {
				currentState: 1,
				repCount: 1
			}
		}
		else {
			return {
				currentState: 0,
				repCount: 0
			}
		}
	}
	else {
		if (currentDistance > (.5 * configuration.armLength)){
			return {
				currentState: 0,
				repCount: 0
			};
		}
		else{
			return {
				currentState: 1,
				repCount: 0
			};
		}
	}
}

// function distance(pt1, pt2){
// 	return math.sqrt( (pt2[0] - pt1[0])**2 + (pt2[1] - pt1[1])**2 )
// }
//
// function angle(pt1,pt2) {
//     m1 = (pt1[1] - pt1[1])/1
//     m2 = (pt2[1] - pt1[1])/(pt2[0]-pt1[0])
//
//     tnAngle = (m1-m2)/(1+(m1*m2))
//     tnAngle = math.atan(tnAngle)
//     ang = tnAngle*180/math.pi
//     ang *= (-1)
//     return ang
// }
//
// function findangle(pt1,pt2){
//     deltaX = pt2[0] - pt1[0]
//     deltaY = pt2[1] - pt1[1]
//
//     return math.atan2(deltaY,deltaX)*180/math.pi
// }
//
// // p1 is center
// function anglebetween(p0, p1, p2){
// 	a = (p1[0]-p0[0])**2 + (p1[1]-p0[1])**2
// 	b = (p1[0]-p2[0])**2 + (p1[1]-p2[1])**2
// 	c = (p2[0]-p0[0])**2 + (p2[1]-p0[1])**2
// 	return math.acos( (a+b-c) / math.sqrt(4*a*b) ) * 180/math.pi
// }
//
//
// //Boxing Neutral Pose
//
// //left shoulder Y == right shoulder Y
// if (pose.keypoints[5].position.y != pose.keypoints[6].position.y) {
// 	console.log("Place shoulders at equal height")
// }
//
// // left elbow Y == right elbow Y
// if (pose.keypoints[7].position.y != pose.keypoints[8].position.y) {
// 	console.log("Place elbows at equal height")
// }
//
// // left wrist (x,y) == left ear (x,y)
// if (pose.keypoints[3].position.y != pose.keypoints[9].position.y
// 	 && pose.keypoints[3].position.x != pose.keypoints[9].position.x) {
// 	console.log("Place wrists in front of your ear.");
// }
// // right wrist (x,y) == right ear (x,y)
// if (pose.keypoints[4].position.y != pose.keypoints[10].position.y
// 		&& pose.keypoints[4].position.x != pose.keypoints[10].position.x) {
// 	console.log("Place right arm closer to your ear.");
// }
//
//
// // Downward Facing Dog
// // shoulders belong on the line from hip to wrist
// y = mx + b
// m = y2 - y1 / x2 - x1
//
// slope = (pose.keypoints[5].position.y - pose.keypoints[9].position.y)
// 				/ (pose.keypoints[5].position.x - pose.keypoints[9].position.x);
//
//
