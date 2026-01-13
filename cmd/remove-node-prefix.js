const fs = require('fs');
const path = require('path');

// 要处理的目录，默认为当前目录
const targetDir = process.argv[2] || process.cwd();

// 匹配带有node:前缀的导入模式
// 处理import语句，如import xxx from 'node:module'
// 处理require语句，如require('node:module')
const nodeImportRegex = /(from\s+['"]|require\(['"])(node:)([^'"]+['"])/g;

// 递归处理目录下的所有JS文件
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // 如果是目录，递归处理
      processDirectory(filePath);
    } else if (stat.isFile() && path.extname(file) === '.js') {
      // 如果是JS文件，处理内容
      processFile(filePath);
    }
  }
}

// 处理单个文件
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // 替换node:前缀
    content = content.replace(nodeImportRegex, '$1$3');
    
    // 如果内容有变化，才写入文件
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`已处理: ${filePath}`);
    }
  } catch (err) {
    console.error(`处理文件出错 ${filePath}:`, err.message);
  }
}

// 开始处理
console.log(`开始处理目录: ${targetDir}`);
processDirectory(targetDir);
console.log('处理完成');
