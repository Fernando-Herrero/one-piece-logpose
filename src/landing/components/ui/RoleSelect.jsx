export const RoleSelect = ({ form, onChange }) => (
    <label className="flex flex-col">
        <span className="font-bold text-md text-primary">✨ Role:</span>
        <select
            className="bg-white no-focus p-2 rounded"
            name="role"
            value={form.role || "user"}
            onChange={onChange}
        >
            <option value="user">User</option>
            <option value="admin">Admin</option>
        </select>
    </label>
);
