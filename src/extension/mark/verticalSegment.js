/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { checkPointOnSegmentLine } from './graphicHelper'

export default {
  name: 'verticalSegment',
  series: 'twoPointLine',
  checkMousePointOnLine: (point1, point2, mousePoint) => {
    return checkPointOnSegmentLine(point1, point2, mousePoint)
  },
  generatedLines: (xyPoints) => {
    if (xyPoints.length === 2) {
      return [xyPoints]
    }
    return []
  },
  performMarkPoints: (tpPoints, pressedPointIndex, { dataIndex, timestamp, price }) => {
    tpPoints[0].timestamp = timestamp
    tpPoints[0].dataIndex = dataIndex
    tpPoints[1].timestamp = timestamp
    tpPoints[1].dataIndex = dataIndex
    tpPoints[pressedPointIndex].price = price
  },
  onMouseMoveForDrawingExtend: (tpPoints, { timestamp, price, dataIndex }) => {
    tpPoints[0].timestamp = timestamp
    tpPoints[0].dataIndex = dataIndex
  }
}
