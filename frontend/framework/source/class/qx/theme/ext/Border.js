/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2007 1&1 Internet AG, Germany, http://www.1and1.org
     2006 STZ-IDA, Germany, http://www.stz-ida.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
   * Alexander Back (aback)

************************************************************************* */

/* ************************************************************************


************************************************************************* */

/**
 * The default qooxdoo border theme.
 */
qx.Theme.define("qx.theme.ext.Border",
{
  title : "Ext",
  
  extend : qx.theme.classic.Border,

  borders :
  {
     "inset-button" :
     {
       width      : 2,
       color      : "border-light",
       innerColor : "border-light-shadow" 
     },
     
     "outset-thin-button" :
     {
       width : 1,
       color : "border-dark"
     },
     
     "tooltip" : 
     {
        width : 1,
        color : "tooltip-border"
     },
     
     "general" : 
     {
       width :  1,
       color : "general-border"
     },
     
     "toolbar" :
     {
        width : 1,
        color : "toolbar-border"
     },
     
     "button-view-button" :
     {
        width : 1,
        color : "button-view-button-border"
     }
  }
});
