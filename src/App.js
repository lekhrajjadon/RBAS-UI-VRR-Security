import React, { useState } from 'react';

const usersData = [
    { id: 1, name: 'lekhraj jadon', email: 'lekhraj.jadon@gmail.com', role: '', status: 'Active' },
    { id: 2, name: 'Ravina Jadon', email: 'Ravina.jadon@gmail.com', role: '', status: 'Inactive' },
    { id: 3, name: 'Bhanu Jadon', email: 'Bhanu.jadon@gmail.com', role: '', status: 'Active' },
    { id: 4, name: 'Meera Patel', email: 'meera.patel@gmail.com', role: '', status: 'Active' },
    { id: 5, name: 'Aditya Singh', email: 'aditya.singh@gmail.com', role: '', status: 'Inactive' },
    { id: 6, name: 'Sanya Desai', email: 'sanya.desai@gmail.com', role: '', status: 'Active' },
    { id: 7, name: 'Kabir Roy', email: 'kabir.roy@gmail.com', role: '', status: 'Active' },
    { id: 8, name: 'Pooja Mishra', email: 'pooja.mishra@gmail.com', role: '', status: 'Inactive' },
    { id: 9, name: 'Ravi Yadav', email: 'ravi.yadav@gmail.com', role: '', status: 'Active' },
    { id: 10, name: 'Ananya Kapoor', email: 'ananya.kapoor@gmail.com', role: '', status: 'Active' },
    { id: 11, name: 'Vikram Chauhan', email: 'vikram.chauhan@gmail.com', role: '', status: 'Inactive' },
    { id: 12, name: 'Neha Jain', email: 'neha.jain@gmail.com', role: '', status: 'Active' },
    { id: 13, name: 'Aman Khurana', email: 'aman.khurana@gmail.com', role: '', status: 'Active' },
    { id: 14, name: 'Diya Mehta', email: 'diya.mehta@gmail.com', role: '', status: 'Inactive' },
];

const rolesData = [
    { id: 1, name: 'Data Analyst', permissions: ['Read', 'Analyze', 'Export'] },
    { id: 2, name: 'Project Manager', permissions: ['Read', 'Write', 'Approve'] },
    { id: 3, name: 'Graphic Designer', permissions: ['Create', 'Edit', 'Delete'] },
    { id: 4, name: 'Developer', permissions: ['Create', 'Read', 'Update', 'Delete'] },
    { id: 5, name: 'Tester', permissions: ['Read', 'Write', 'Execute'] },
    { id: 6, name: 'Admin', permissions: ['Read', 'Write', 'Execute', 'Approve'] },
];

const App = () => {
    const [users, setUsers] = useState(usersData);
    const [roles, setRoles] = useState(rolesData);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedRole, setSelectedRole] = useState(null);

    const handleUserChange = (e) => {
        const { name, value } = e.target;
        setSelectedUser({ ...selectedUser, [name]: value });
    };

    const handleRoleChange = (e) => {
        const { name, value } = e.target;
        setSelectedRole({ ...selectedRole, [name]: value });
    };

    const saveUser = () => {
        if (selectedUser.id) {
            setUsers(users.map(user => user.id === selectedUser.id ? selectedUser : user));
        } else {
            setUsers([...users, { ...selectedUser, id: users.length + 1 }]);
        }
        setSelectedUser(null);
    };

    const saveRole = () => {
        if (selectedRole.id) {
            setRoles(roles.map(role => role.id === selectedRole.id ? selectedRole : role));
        } else {
            setRoles([...roles, { ...selectedRole, id: roles.length + 1 }]);
        }
        setSelectedRole(null);
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center p-4"
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1733230585457-8a0f94c57f86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOTR8fHxlbnwwfHx8fHw%3D")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="container mx-auto bg-white bg-opacity-90 p-6 rounded shadow-md">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">RBAC Lekhraj Jadon Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* User Management */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">User In Organization</h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4" onClick={() => setSelectedUser({})}>Add User</button>
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Name</th>
                                    <th className="py-2 px-4 border-b">Email</th>
                                    <th className="py-2 px-4 border-b">Role</th>
                                    <th className="py-2 px-4 border-b">Status</th>
                                    <th className="py-2 px-4 border-b">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td className="py-2 px-4 border-b">{user.name}</td>
                                        <td className="py-2 px-4 border-b">{user.email}</td>
                                        <td className="py-2 px-4 border-b">{user.role}</td>
                                        <td className="py-2 px-4 border-b">{user.status}</td>
                                        <td className="py-2 px-4 border-b">
                                            <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2" onClick={() => setSelectedUser(user)}>Edit</button>
                                            <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => setUsers(users.filter(u => u.id !== user.id))}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Role Management */}
                    <div>
                    <h2 className="text-2xl font-bold mb-2 text-indigo-100">Role In The Organization </h2>

                        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4" onClick={() => setSelectedRole({})}>Add Role</button>
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Role</th>
                                    <th className="py-2 px-4 border-b">Permissions</th>
                                    <th className="py-2 px-4 border-b">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roles.map(role => (
                                    <tr key={role.id}>
                                        <td className="py-2 px-4 border-b">{role.name}</td>
                                        <td className="py-2 px-4 border-b">{role.permissions.join(', ')}</td>
                                        <td className="py-2 px-4 border-b">
                                            <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2" onClick={() => setSelectedRole(role)}>Edit</button>
                                            <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => setRoles(roles.filter(r => r.id !== role.id))}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* User Modal */}
                {selectedUser && (
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded shadow-lg w-96">
                            <h3 className="text-xl font-semibold mb-4">{selectedUser.id ? 'Edit User' : 'Add User'}</h3>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={selectedUser.name || ''}
                                onChange={handleUserChange}
                                className="w-full mb-4 p-2 border border-gray-300 rounded"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={selectedUser.email || ''}
                                onChange={handleUserChange}
                                className="w-full mb-4 p-2 border border-gray-300 rounded"
                            />
                            <input
                                type="text"
                                name="role"
                                placeholder="Role"
                                value={selectedUser.role || ''}
                                onChange={handleUserChange}
                                className="w-full mb-4 p-2 border border-gray-300 rounded"
                            />
                            <input
                                type="text"
                                name="status"
                                placeholder="Status"
                                value={selectedUser.status || ''}
                                onChange={handleUserChange}
                                className="w-full mb-4 p-2 border border-gray-300 rounded"
                            />
                            <div className="flex justify-end space-x-2">
                                <button onClick={() => setSelectedUser(null)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                                <button onClick={saveUser} className="bg-blue-500 text-white px-4 py-2 rounded">{selectedUser.id ? 'Save' : 'Add'}</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Role Modal */}
                {selectedRole && (
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded shadow-lg w-96">
                            <h3 className="text-xl font-semibold mb-4">{selectedRole.id ? 'Edit Role' : 'Add Role'}</h3>
                            <input
                                type="text"
                                name="name"
                                placeholder="Role Name"
                                value={selectedRole.name || ''}
                                onChange={handleRoleChange}
                                className="w-full mb-4 p-2 border border-gray-300 rounded"
                            />
                            <input
                                type="text"
                                name="permissions"
                                placeholder="Permissions (comma separated)"
                                value={selectedRole.permissions ? selectedRole.permissions.join(', ') : ''}
                                onChange={e => handleRoleChange({ target: { name: 'permissions', value: e.target.value.split(',').map(p => p.trim()) } })}
                                className="w-full mb-4 p-2 border border-gray-300 rounded"
                            />
                            <div className="flex justify-end space-x-2">
                                <button onClick={() => setSelectedRole(null)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                                <button onClick={saveRole} className="bg-blue-500 text-white px-4 py-2 rounded">{selectedRole.id ? 'Save' : 'Add'}</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
