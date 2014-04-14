/* *****************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2013-2014 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Thomas Herchenroeder (thron7)
     * Richard Sternagel (rsternagel)

***************************************************************************** */

/**
 * @module annotator.parent
 *
 * @desc
 * Annotator for esprima AST.
 *
 * What?
 *  parent node
 *
 * Where?
 *  every node
 */

var estraverse = require('estraverse');

/**
 * Augmentation key for tree.
 */
var annotateKey = "parent";

/**
 * Annotate tree with parent information.
 */
function annotate (etree) {
  var controller = new estraverse.Controller();
  controller.traverse(etree, {
    enter : function (node, parent) {
      node[annotateKey] = parent;
    }
  });
}

module.exports = {
  annotate : annotate
};
