import { FieldValue } from 'firebase/firestore'
import moment from 'moment'
import React from 'react'

interface TimeObject extends FieldValue {
    seconds: number
}
interface TimestampProps {
    timestamp: FieldValue | Date | null
}

const Timestamp = ({ timestamp }: TimestampProps) => {
    // Utility to parse timestamp
    const parseTimestamp = () => {
        // Return early on missing timestamp
        if (!timestamp) {
            return
        }

        // If timestamp is a JSON time object, convert to date
        // Otherwise assume it has already been converted on pre-fetch
        if (!(timestamp instanceof Date) && timestamp instanceof Object) {
            if (!('seconds' in timestamp)) {
                return 'Cannot fetch time'
            }
            const timestampType: TimeObject = timestamp as TimeObject
            if (timestampType && timestampType.seconds) {
                timestamp = new Date(timestampType?.seconds * 1000 || '')
            }
        }

        // Convert to fromNow time
        return moment(timestamp).fromNow()
    }

    return (
        <>
            {timestamp ? (
                <p>{parseTimestamp()}</p>
            ) : (
                <p className="inline-flex text-neutral-700 dark:text-neutralDark-50">
                    loading
                </p>
            )}
        </>
    )
}

export default Timestamp
