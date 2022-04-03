# useQuery - simple hook to read URL query parameters in ReactJS

```javascript
// MyReactComponent.js

import useQuery from 'usequery';

function MyReactComponent() {
    const { form, id } = useQuery('form id');

    return (
        <div>
            <div>Form: {form}</div>
            <div>id: {id}</div>
        </div>
    );
}
```
