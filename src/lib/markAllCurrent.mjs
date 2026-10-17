// A guide can sit in the sidebar twice: under Guides and under its extension.
// Starlight marks only the first link to the current page as current, so the
// extension's copy stayed unhighlighted and its group stayed collapsed. This marks
// every link to `pathname` as current and returns whether any was found, which
// Starlight's sidebar uses to open the groups that contain one.
export function markAllCurrent(entries, pathname) {
    let found = false
    for (const entry of entries) {
        if (entry.type === 'link') {
            if (entry.href === pathname) {
                entry.isCurrent = true
                found = true
            }
        } else if (markAllCurrent(entry.entries, pathname)) {
            found = true
        }
    }
    return found
}
