function downloadFile(url: string, filename: string) {
  // Create an anchor element
  const anchor = document.createElement('a')

  // Set the anchor's href to the file URL
  anchor.href = url

  // Set the anchor's download attribute to the desired filename
  anchor.download = filename

  // Programmatically click the anchor element to trigger the download
  anchor.click()

  // Clean up the anchor element
  anchor.remove()
}

export { downloadFile }
