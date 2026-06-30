import { useState } from "react";
import { X } from "lucide-react";
import { addApplication } from "../../services/application";

interface Props {
    open: boolean;
    onClose: () => void;
    onAdded: () => void;
    userId: string;
}

export default function AddApplicationModal({
    open,
    onClose,
    onAdded,
    userId,
}: Props) {
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("applied");
    const [jobLink, setJobLink] = useState("");
    const [notes, setNotes] = useState("");
    const [loading, setLoading] = useState(false);

    if (!open) return null;

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setLoading(true);

        try {
            console.log("Modal userId:", userId);

            console.log({
                userId,
                company,
                role,
                status,
                jobLink,
                notes,
            });
            const res = await addApplication({
                userId,
                company,
                role,
                status,
                jobLink,
                notes,
            });

            console.log("Saved:", res);

            await onAdded();

            setCompany("");
            setRole("");
            setStatus("applied");
            setJobLink("");
            setNotes("");

            onClose();
        } catch (err) {
            console.error(err);
        }

        setLoading(false);
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="w-full max-w-xl rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">

                <div className="mb-6 flex items-center justify-between">

                    <h2 className="text-2xl font-bold">
                        Add Application
                    </h2>

                    <button onClick={onClose}>
                        <X />
                    </button>

                </div>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <input
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Company"
                        required
                        className="w-full rounded-xl border p-4"
                    />

                    <input
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="Role"
                        required
                        className="w-full rounded-xl border p-4"
                    />

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full rounded-xl border p-4"
                    >

                        <option value="applied">
                            Applied
                        </option>

                        <option value="interview">
                            Interview
                        </option>

                        <option value="offer">
                            Offer
                        </option>

                        <option value="rejected">
                            Rejected
                        </option>

                    </select>

                    <input
                        value={jobLink}
                        onChange={(e) => setJobLink(e.target.value)}
                        placeholder="Job Link"
                        className="w-full rounded-xl border p-4"
                    />

                    <textarea
                        rows={4}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Notes..."
                        className="w-full rounded-xl border p-4"
                    />

                    <button
                        disabled={loading}
                        className="w-full rounded-xl bg-black py-4 font-semibold text-white"
                    >

                        {loading ? "Saving..." : "Save Application"}

                    </button>

                </form>

            </div>

        </div>

    );

}