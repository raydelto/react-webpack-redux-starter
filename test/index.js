const src = require.context("../src", true, /.(js|jsx)$/);
src.keys().forEach(src);
