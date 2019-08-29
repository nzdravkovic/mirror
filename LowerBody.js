import PoseConfig from './PoseConfig.js';

export function squatCalculator(currentState, configuration) {
	let inline = configuration.inlineDetector(
		configuration.leftHip, configuration.leftKnee, y);
	if (currentState == 0) {
		if (inline){
			return {
				currentState: 1,
				repCount: 1
			};
		}
		else {
			return {
				currentState: 0,
				repCount: 0
			};
		}
	}
	else {
		if (inline) {
			return {
				currentState: 1,
				repCount: 0
			};
		}
		else {
			return {
				currentState: 0,
				repCount: 0
			};
		}
	}
}
