/**
 * Copyright 2023 The MediaPipe Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Category} from '../../../../tasks/web/components/containers/category';
import {Landmark, NormalizedLandmark} from '../../../../tasks/web/components/containers/landmark';
import {MPMask} from '../../../../tasks/web/vision/core/mask';

export {type Category, type Landmark, type NormalizedLandmark};

/**
 * Represents the pose landmarks deection results generated by `PoseLandmarker`.
 * Each vector element represents a single pose detected in the image.
 */
export class PoseLandmarkerResult {
  constructor(
      /**
       * Pose landmarks of detected poses.
       * @export
       */
      readonly landmarks: NormalizedLandmark[][],
      /**
       * Pose landmarks in world coordinates of detected poses.
       * @export
       */
      readonly worldLandmarks: Landmark[][],
      /**
       * Segmentation mask for the detected pose.
       * @export
       */
      readonly segmentationMasks?: MPMask[]) {}

  /**
   * Frees the resources held by the segmentation masks.
   * @export
   */
  close(): void {
    this.segmentationMasks?.forEach(m => {
      m.close();
    });
  }
}
