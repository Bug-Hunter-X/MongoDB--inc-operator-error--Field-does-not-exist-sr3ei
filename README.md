# MongoDB $inc Operator Error: Handling Non-Existent Fields

This repository demonstrates a common error encountered when using the `$inc` operator in MongoDB to increment a numerical field that might not yet exist. The incorrect code attempts to increment a field that doesn't exist, leading to unexpected behavior or errors.  The solution showcases how to correctly handle this situation using the `$inc` operator in conjunction with the `$setOnInsert` operator or by checking field existance before applying update operation.

## Bug Description
The original code uses `$inc` to increment a counter field. However, if the field doesn't exist for a particular document, an error occurs. The solution demonstrates a proper way to handle this case.