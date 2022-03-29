/**
 * @fileoverview 未在template使用的数据则不需要在data中定义
 * @author template-no-unused-data
 */
let templateUseData = [];
const reportMsgByNode = function (node) {
  let nodeval = node;
  function fun(aa) {
    if (!aa.object) {
      nodeval = aa;
    } else {
      fun(aa.object);
    }
  }
  fun(node);
  templateUseData.push(nodeval.name);
};

const actions = {
  MemberExpression: (node, context) => {
    reportMsgByNode(node, context);
  },
  LogicalExpression: (node, context) => {
    if (node.right) {
      reportMsgByNode(node.right?.argument || node.right, context);
    }
    if (!node.left) {
      return;
    }
    if (!node.left.right) {
      reportMsgByNode(node.left, context);
    } else {
      traverseTemplateNode(node.left, context);
    }
  },
  ObjectExpression: (node, context) => {
    node.properties.forEach((itemNode) => {
      if (itemNode.value.type === "LogicalExpression") {
        traverseTemplateNode(itemNode.value, context);
      } else {
        reportMsgByNode(itemNode.value, context);
      }
    });
  },
  VForExpression: (node, context) => {
    reportMsgByNode(node.right, context);
  },
};

function traverseTemplateNode(node, context) {
  actions[node.type] && actions[node.type](node, context);
}

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: "problem", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "未在template使用的数据则不需要在data中定义",
    },
    fixable: null, // Or `code` or `whitespace`
  },

  create(context) {
    return context.parserServices.defineTemplateBodyVisitor(
      {
        VExpressionContainer: (node) => {
          traverseTemplateNode(node.expression, context);
        },
      },
      {
        'ExportDefaultDeclaration>ObjectExpression>[key.name="data"]>FunctionExpression>BlockStatement>ReturnStatement>ObjectExpression>Property':
          (node) => {
            if (!node.key.name) {
              return;
            }
            if (!templateUseData.includes(node.key.name)) {
              context.report({
                node: node.key,
                message:
                  "没有在template中使用，定义在data中会造成额外的开销: {{ name }}",
                data: {
                  name: node.key.name,
                },
              });
            }
          },
      },
      {
        templateBodyTriggerSelector: "Program",
      }
    );
  },
};
