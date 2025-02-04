import { Ref } from '../types';

export default function isDetached(element: Ref): boolean {
  // falsy elements are detached (probably a null parent)
  if (!element) return true;

  // Non HTML Elements should never be considered detached
  // If we can find our way up to a document node, we assume we are still attached!
  if (
    !(element instanceof HTMLElement) ||
    element.nodeType === Node.DOCUMENT_NODE
  )
    return false;

  // Recursive call
  return isDetached(element.parentNode);
}
