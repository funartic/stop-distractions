import { logMessage } from '../background_scripts/background-module.js';
import BrowserTabs from './components/tabs.js';
logMessage('Hello World from extension page using modules');
BrowserTabs.getAll();