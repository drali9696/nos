function getModelFromFile(filePath: string): string {
  const normalizedPath = filePath.replace(/\\/g, '/');
  return normalizedPath.split('/').pop() || '';
}


export function prettyBaseModel(model: string | undefined): string {
  if (!model) return '';
  if (model.includes('gpt-4-vision-preview')) return 'version 2';
  if (model.includes('gpt-4-1106-preview')) return 'version 2';
  if (model.includes('gpt-4-32k')) return 'version 2';
  if (model.includes('gpt-4')) return 'version 2';
  if (model.includes('gpt-3.5-turbo-instruct')) return 'version 1';
  if (model.includes('gpt-3.5-turbo-1106')) return 'version 1';
  if (model.includes('gpt-3.5-turbo-16k')) return 'version 1';
  if (model.includes('gpt-3.5-turbo')) return 'version 1';
  if (model.endsWith('.bin')) return model.slice(0, -4);
  // [LM Studio]
  if (model.startsWith('C:\\') || model.startsWith('D:\\'))
    return getModelFromFile(model).replace('.gguf', '');
  // [Ollama]
  if (model.includes(':'))
    return model.replace(':latest', '').replaceAll(':', ' ');
  return model;
}
