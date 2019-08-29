// import PoseDetector from './PoseDetector.js';

class PoseConfig {

	constructor(pose) {

		this.nose = pose[0].keypoints[0].position;
		this.leftEye = pose[0].keypoints[1].position;
		this.rightEye = pose[0].keypoints[2].position;
		this.leftEar = pose[0].keypoints[3].position;
		this.rightEar = pose[0].keypoints[4].position;
		this.leftShoulder = pose[0].keypoints[5].position;
		this.rightShoulder = pose[0].keypoints[6].position;
		this.leftElbow = pose[0].keypoints[7].position;
		this.rightElbow = pose[0].keypoints[8].position;
		this.leftWrist = pose[0].keypoints[9].position;
		this.rightWrist = pose[0].keypoints[10].position;
		this.leftHip = pose[0].keypoints[11].position;
		this.rightHip = pose[0].keypoints[12].position;
		this.leftKnee = pose[0].keypoints[13].position;
		this.rightKnee = pose[0].keypoints[14].position;
		this.leftAnkle = pose[0].keypoints[15].position;
		this.rightAnkle = pose[0].keypoints[16].position;

		this.torsoLength = this.distanceCalc(this.leftHip, this.leftShoulder);
		this.armLength = this.distanceCalc(this.leftShoulder, this.leftWrist);
		this.legLength = this.distanceCalc(this.leftHip, this.leftAnkle);
	}

	standardErr(value) {
		return {
			lowerBound: value - .2(value),
			upperBound: value + .2(value)
		};
	}

	distanceCalc(pt1, pt2) {
		let xsquared = (pt2.x - pt1.x) * (pt2.x - pt1.x);
		let ysquared = (pt2.y - pt1.y) * (pt2.y - pt1.y);

		return Math.sqrt(xsquared + ysquared);
	}

	angleDetector(pt1, pt2) {
		let m1 = (pt1[1] - pt1[1])/1;
		let m2 = (pt2[1] - pt1[1])/(pt2[0]-pt1[0]);

		let tnAngle = (m1-m2)/(1+(m1*m2));
		tnAngle = Math.atan(tnAngle);
		let ang = tnAngle*180/Math.pi;
		ang *= (-1);
		return ang;
	}

	inlineDetector(pt1, pt2, coordinate) {
		if (coordinate == 'x'){
			let error = standardErr(pt2.x);
			if (pt1.x < error.lowerBound || pt1.x > error.upperBound) {
				return false;
			}
			return true;
		}
		else {
			let error = standardErr(pt2.y);
			if (pt1.y < error.lowerBound || pt1.y > error.upperBound) {
				return false;
			}
			return true;
		}
	}

	slopeCalc(pt1, pt2, questionPt) {
		let slope = (pt2.y - pt1.y) / (pt2.x - pt2.x);
		let b = pt2.y - slope * pt2.x;

		let error = standardErr(questionPt.y);
		let goalY = slope * questionPt.x + b;
		if (goalY > error.upperBound || goalY < error.lowerBound) {
			return false;
		}
		return true;
	}
}
module.exports = PoseConfig;
