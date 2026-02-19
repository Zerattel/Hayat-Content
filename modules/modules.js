/**
 * @type { Record<string, 
 * (
 *    modificator: {
 *      target: string,
 *      characteristic: string,
 *      modificationType: string,
 *      modificator: number | string,
 *      isAffectedByInterference: boolean
 *    }, 
 *    module: BaseModule,
 *    parent: ShipObject,
 *    target: ShipObject
 *  ) => number }
 */
const MODULES_CALCULATION_FUNCTIONS = {
  test: (modificator, module, parent, target) => { return 0; }
}

export default MODULES_CALCULATION_FUNCTIONS;