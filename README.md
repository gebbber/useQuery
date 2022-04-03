# useQueryParams - simple hook to read URL query parameters in ReactJS

```javascript
// MyReactComponent.js

import useQueryParams from 'usequeryparams';

function MyReactComponent() {
    const { form, id } = useQueryParams('form id');

    return (
        <div>
            <div>Form: {form}</div>
            <div>id: {id}</div>
        </div>
    );
}
```
