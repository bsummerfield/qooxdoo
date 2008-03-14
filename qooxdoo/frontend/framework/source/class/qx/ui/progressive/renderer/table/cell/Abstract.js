/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2008 Derrell Lipman

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Derrell Lipman (derrell)

************************************************************************ */

/* ************************************************************************

#module(ui_progressive)

************************************************************************ */

/**
 * Cell Renderer for Progressive's Table.  EXPERIMENTAL!  INTERFACE MAY CHANGE.
 */
qx.Class.define("qx.ui.progressive.renderer.table.cell.Abstract",
{
  type       : "abstract",
  extend     : qx.core.Object,


  members :
  {
    /**
     * Retrieve any style characteristics the cell renderer wants applied to
     * this cell.
     *
     * @param cellInfo {Object}
     */
    _getCellStyle : function(cellInfo)
    {
      return "";
    },

    _getCellExtras : function(cellInfo)
    {
      return "";
    },

    _getContentHtml : function(cellInfo)
    {
      return cellInfo.cellData || "";
    },

    /**
     */
    render : function(cellInfo)
    {  
      var html = [ ];
      var style = this._getCellStyle(cellInfo);

      // Render this cell
      html.push("<div ",
                "class='", cellInfo.stylesheet, "' ");

      if (style)
      {
        html.push("style='", style, "'");
      }

      html.push(this._getCellExtras(cellInfo),
                ">",
                this._getContentHtml(cellInfo),
                "</div>");

      return html.join("");
    }
  }
});
